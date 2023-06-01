import React, { FC } from 'react'
import styles from './UserDataError.module.css'
import NotFoundIllustration from '/notfound.svg'

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
      {/* <NotFoundIllustration /> */}
      <img src='/notfound.svg' />
      {/* <iframe src="https://giphy.com/embed/EeIX8IZvvGZ2CRCWSO" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
    </div>
  )
}

const Error = () => {
  return (
    <div className={styles.not_found__main}>
      <div>
        <h1>Couldn't fetch User Details</h1>
      </div>
      {/* <NotFoundIllustration /> */}
      <img src='/usererror.svg' />
      {/* <iframe src="https://giphy.com/embed/EeIX8IZvvGZ2CRCWSO" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
    </div>
  )
}