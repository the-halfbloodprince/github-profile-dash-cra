export type UserData = {
    name: string
    username: string
    avatarUrl: string
    bio: string
    location: string
    html_url: string
    followerCount: number
    followingCount: number
    publicRepositoryCount: number
}

export type Lang = {
    name: string
    value: number
}

export type Repo = {
    id: number
    name: string
    description: string
    // language: string
    forks_count: number
    watchers_count: number
    languages: Lang[]
    languages_url?: string
    html_url: string
}