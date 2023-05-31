export type UserData = {
    name: string
    username: string
    avatarUrl: string
    bio: string
    location: string
    followerCount: number
    followingCount: number
    publicRepositoryCount: number
}

export type Repo = {
    name: string
    description: string
    language: string
    forkCount: number
    watcherCount: number
}