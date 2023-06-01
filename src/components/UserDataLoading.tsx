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
          <p className={styles.username}> <Skeleton animation="wave" variant='rectangular' width={200} /> </p>
        {/* </a> */}
        <p className={styles.bio}> <Skeleton animation="wave" variant='text' /> </p>
        <p className={styles.location}>
          {/* <LocationIcon /> */}
          <Skeleton animation="wave" variant='rectangular' width={100} />
        </p>
        <div className={styles.numbers}>
          <Skeleton animation="wave" variant='rectangular' width={200} height={75} className={styles.rounded} />
          <Skeleton animation="wave" variant='rectangular' width={200} height={75} className={styles.rounded} />
          <Skeleton animation="wave" variant='rectangular' width={200} height={75} className={styles.rounded} />
        </div>
      </div>
      <div className={styles.img_section}>
        <Skeleton animation="wave" variant='circular' width={200} height={200} />
      </div>
    </div>
  )
}

export default UserDataLoading