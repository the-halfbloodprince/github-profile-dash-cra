import React, { FC } from 'react'
import styles from './User.module.css'
import { UserData, Repo } from '../models/GitHub'
import LocationIcon from '@mui/icons-material/Place'
import LinkIcon from '@mui/icons-material/Link';

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
     html_url,
     location, 
     publicRepositoryCount 
} }) => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <p className={styles.name}> { name } </p>
        <a href={html_url} target='_blank'>
          <p className={styles.username}> <LinkIcon className={styles.linkIcon} /> <div>{ username }</div> </p>
        </a>
        <p className={styles.bio}> { bio || "No bio available" } </p>
        <p className={styles.location}>
          { 
            location && (
              <>
                <LocationIcon />
                <p>{ location }</p>
              </>
            )
          }
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