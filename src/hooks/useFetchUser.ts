import React, { useEffect, useState } from 'react'
import axios from 'axios'
import type { UserData } from '../models/GitHub'

export const useFetchUserData = (username: string) => {

    const [userDataError, setUserDataError] = useState<number>(0)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [userLoading, setUserLoading] = useState(false)

    const githubBase = 'https://api.github.com'
    const userDataApiUrl = `${githubBase}/users/${username}`

    useEffect(() => {
        
        if (!username) {
            return
        }
        
        setUserLoading(true)
        
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
                    html_url: res.data.html_url,
                    publicRepositoryCount: res.data.public_repos,
                })

                setUserDataError(0)

            }).catch(err => {
                setUserData(null)
                setUserDataError(err.response?.status)
            }).finally(() => {
                setUserLoading(false)
            })

        return () => {
            setUserData(null)
        }

    }, [username])

    return {
        userData, 
        userLoading, 
        userDataError
    }

}