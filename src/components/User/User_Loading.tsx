import React, { FC } from 'react'
import styles from './User.module.css'
import { Skeleton } from '@mui/material'

type Props = {}

const UserLoadingScreen: FC<Props> = () => {

  const animationType = "pulse"

  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <p className={styles.name}> <Skeleton animation={animationType} variant='text' /> </p>
        <p className={styles.username}> <Skeleton animation={animationType} variant='rectangular' width={200} /> </p>
        <p className={styles.bio}> <Skeleton animation={animationType} variant='text' /> </p>
        <p className={styles.location}>
          <Skeleton animation={animationType} variant='rectangular' width={100} />
        </p>
        <div className={styles.numbers}>
          <Skeleton animation={animationType} variant='rectangular' width={200} height={75} className={styles.rounded} />
          <Skeleton animation={animationType} variant='rectangular' width={200} height={75} className={styles.rounded} />
          <Skeleton animation={animationType} variant='rectangular' width={200} height={75} className={styles.rounded} />
        </div>
      </div>
      <div className={styles.img_section}>
        <Skeleton animation={animationType} variant='circular' width={200} height={200} />
      </div>
    </div>
  )
}

export default UserLoadingScreen