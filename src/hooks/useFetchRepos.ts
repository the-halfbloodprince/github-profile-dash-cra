import React, { useEffect, useState } from 'react'
import axios from 'axios'
import type { Repo, Lang } from '../models/GitHub'

export const useFetchReposData = (username: string, page: number, per_page: number) => {

    const [reposError, setReposError] = useState(null)
    const [repos, setRepos] = useState<Repo[] | null>(null)
    const [reposLoading, setReposLoading] = useState(false)

    const githubBase = 'https://api.github.com'
    const userReposApiUrl = `${githubBase}/users/${username}/repos?page=${page}&per_page=${per_page}`

    useEffect(() => {

        setReposLoading(true)
        if (username === '') {
            return
        }

        axios
            .get(userReposApiUrl)
            .then(res => {

                // construct the repos from the response
                const data = res.data as Repo[]                
                const finalRepos: Repo[] = []

                data.map(repo => {
                    const r: Repo = {
                        id: repo.id,
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

                // fetch all the languages based on their languages url
                
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
        repos, reposLoading, reposError 
    }

}