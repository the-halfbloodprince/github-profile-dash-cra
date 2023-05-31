import React, { FC } from 'react'
import styles from './User.module.css'
import { UserData, Repo } from '../models/GitHub'
import LocationIcon from '@mui/icons-material/Place'
import { Skeleton } from '@mui/material'

type Props = {}

const UserDataLoading: FC<Props> = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <p className={styles.name}> <Skeleton animation="wave" variant='text' /> </p>
        {/* <a href={html_url} target='_blank'> */}
          <p className={styles.username}> <Skeleton animation="wave" variant='text' /> </p>
        {/* </a> */}
        <p className={styles.bio}> <Skeleton animation="wave" variant='text' /> </p>
        <p className={styles.location}>
          <LocationIcon />
          <Skeleton animation="wave" variant='text' />
        </p>
        <div className={styles.numbers}>
          <p className={styles.followerCount}> Followers: <span> <Skeleton animation="wave" variant='rectangular' /> </span> </p>
          <p className={styles.followingCount}> Following: <span> <Skeleton animation="wave" variant='rectangular' /> </span> </p>
          <p className={styles.publicRepositoryCount}> Public Repositories: <span> <Skeleton animation="wave" variant='rectangular' /> </span> </p>
        </div>
      </div>
      <div className={styles.img_section}>
        <Skeleton animation="wave" variant='circular' width={200} height={200} />
      </div>
    </div>
  )
}

export default UserDataLoading