import React, { FC } from 'react'
import styles from './User.module.css'
import { UserData, Repo } from '../models/GitHub'
import LocationIcon from '@mui/icons-material/Place'

type Props = {
    userData: UserData
}

const User: FC<Props> = ({ userData: {
     name, 
     bio, 
     username, 
     avatarUrl, 
     followerCount, 
     followingCount, 
     location, 
     publicRepositoryCount 
} }) => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <p className={styles.name}> { name } </p>
        <p className={styles.username}> { username } </p>
        <p className={styles.bio}> { bio } </p>
        <p className={styles.location}>
          <LocationIcon />
          <p>{ location }</p>
        </p>
        <div className={styles.numbers}>
          <p className={styles.followerCount}> Followers: <span> { followerCount } </span> </p>
          <p className={styles.followingCount}> Following: <span> { followingCount } </span> </p>
          <p className={styles.publicRepositoryCount}> Public Repositories: <span> { publicRepositoryCount } </span> </p>
        </div>
      </div>
      <div className={styles.img_section}>
        <img src={avatarUrl} alt={`${name}'s profile picture`} />
      </div>
    </div>
  )
}

export default User