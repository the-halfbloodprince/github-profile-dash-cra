import React, { FC } from 'react'
import styles from './User_Error.module.css'

type Props = {
  status: number
}

const UserDataError: FC<Props> = ({ status }) => {
  return status === 404 ? <NotFound /> : <Error />
}

export default UserDataError

const NotFound = () => {
  return (
    <div className={styles.not_found__main}>
      <div>
        <h1>404</h1>
        <h1>User Not Found</h1>
      </div>
      <img src='/notfound.svg' />
    </div>
  )
}

const Error = () => {
  return (
    <div className={styles.not_found__main}>
      <div>
        <h1>Couldn't fetch User Details</h1>
      </div>
      <img src='/usererror.svg' />
    </div>
  )
}