import React, { useEffect, useState } from 'react'
import axios from 'axios'
import type { UserData, Repo, Lang } from '../models/GitHub'

export const useFetchUserData = (username: string, page: number, per_page: number) => {

    const [userDataError, setUserDataError] = useState<number>(0)
    const [reposError, setReposError] = useState(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [repos, setRepos] = useState<Repo[] | null>(null)
    const [userLoading, setUserLoading] = useState(false)
    const [reposLoading, setReposLoading] = useState(false)

    const githubBase = 'https://api.github.com'
    const userDataApiUrl = `${githubBase}/users/${username}`
    const userReposApiUrl = `${githubBase}/users/${username}/repos?page=${page}&per_page=${per_page}`

    useEffect(() => {

        console.log('useeffect1 triggered')
        
        if (!username) {
            console.log('exit')
            console.log(username)
            return
        }
        
        setUserLoading(true)
        console.log('loading')
        
        axios
            .get(userDataApiUrl, {
                headers: {
                    'Authorization': process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
                }
            })
            .then(res => {
                
                // Set data
                setUserData({
                    name: res.data.name,
                    username: res.data.login,
                    bio: res.data.bio,
                    avatarUrl: res.data.avatar_url,
                    followerCount: res.data.followers,
                    followingCount: res.data.following,
                    location: res.data.location,
                    html_url: res.data.html_url,
                    publicRepositoryCount: res.data.public_repos,
                })

            }).catch(err => {
                setUserDataError(err.response.status)
            }).finally(() => {
                setUserLoading(false)
            })

    }, [username])

    useEffect(() => {

        setReposLoading(true)
        if (username === '') {
            return
        }

        axios
            .get(userReposApiUrl, {
                headers: {
                    'Authorization': process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
                }
            })
            .then(res => {
                console.log(res.data)
                const data = res.data as Repo[]
                
                const finalRepos: Repo[] = []

                data.map(repo => {
                    const r: Repo = {
                        name: repo.name,
                        description: repo.description,
                        forks_count: repo.forks_count,
                        languages: [],
                        languages_url: repo.languages_url,
                        watchers_count: repo.watchers_count,
                        html_url: repo.html_url
                    }

                    finalRepos.push(r)
                })

                return finalRepos

            }).then(async (finalRepos: Repo[]) => {
                
                for (let i = 0; i < finalRepos.length; i++) {
                    const url = finalRepos[i].languages_url as string
                    const res = await axios.get(url)
                    const langsObj = res.data
                    const langs: Lang[] = []
                    Object.keys(langsObj).forEach((key, idx) => {
                        langs.push({
                            name: key,
                            value: langsObj[key]
                        })
                    })
                    finalRepos[i].languages = langs
                }

                setRepos(finalRepos)

            }).catch((err) => {
                setReposError(err.response.status)
            }).finally(() => {
                setReposLoading(false)
            })

    }, [username, page, per_page])

    return {
        userData, userLoading, userDataError,
        repos, reposLoading, reposError 
    }

}