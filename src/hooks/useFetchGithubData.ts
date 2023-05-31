import React, { useEffect, useState } from 'react'
import axios from 'axios'
import type { UserData, Repo } from '../models/GitHub'

// const fetchData = async (url: string) => {
//     try {
//         const res = await axios.get(url)
//         return res.data
//     } catch (ex) {
//         return ex
//     }
// }

export const useFetchUserData = (username: string, page: number, per_page: number) => {

    const [userDataError, setUserDataError] = useState(null)
    const [reposError, setReposError] = useState(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [repos, setRepos] = useState<Repo[] | null>(null)
    const [userLoading, setUserLoading] = useState(false)
    const [reposLoading, setReposLoading] = useState(false)

    const githubBase = 'https://api.github.com'
    const userDataApiUrl = `${githubBase}/users/${username}`
    // const userDataApiUrl = githubBase + '/users/' + username
    // repos?page=1&per_page=10
    // const userReposApiUrl = githubBase + '/users/' + username + '/repos?' + 'page=' + page + '&per_page=' + per_page
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
            .get(userDataApiUrl)
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
                    publicRepositoryCount: res.data.public_repos,
                })

            }).catch(err => {
                setUserDataError(err)
            }).finally(() => {
                setUserLoading(false)
            })

    }, [username])

    // useEffect(() => {

    //     setReposLoading(true)

    //     axios
    //         .get(userReposApiUrl)
    //         .then(res => {
    //             // set
    //         })

    // }, [username, page, per_page])

    return {
        userData, userLoading, userDataError,
        repos, reposLoading, reposError 
    }

}

// const useFetchRepoData = (username: string, options = {}) => {

//     const [error, setError] = useState(null)
//     const [data, setData] = useState<UserData>(null)
//     const [loading, setLoading] = useState(false)

//     const githubBase = 'https://api.github.com'
//     // repos?page=1&per_page=10
//     const apiUrl = githubBase + '/users/' + username + 'repos?page=1&per_page=10'

//     useEffect(() => {

//         setLoading(true)

//         axios
//             .get(apiUrl)
//             .then(res => {
                
//                 // Set data
//                 setData({
//                     name: res.data.name,
//                     username: res.data.login,
//                     bio: res.data.bio,
//                     avatarUrl: res.data.avatar_url,
//                     followerCount: res.data.followers,
//                     followingCount: res.data.following,
//                     location: res.data.location,
//                     publicRepositoryCount: res.data.public_repos,
//                 })

//                 setLoading(false)
//             }).catch(err => {
//                 setError(err)
//             })

//     }, [username])

// }