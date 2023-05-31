import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import TextField from '@mui/material/TextField'
import axios from 'axios';
import { useFetchUserData } from './hooks/useFetchGithubData';
import UserDataLoading from './components/UserDataLoading';
import User from './components/User';
import UserDataError from './components/UserDataError';

function App() {

  const usernameInputRef = useRef<HTMLInputElement>(null)
  const [username, setUsername] = useState<string>("the-halfbloodprince")

  const {
    userData, userLoading, userDataError,
    repos, reposLoading, reposError
  } = useFetchUserData(username, 1, 10)

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setUsername(usernameInputRef.current!.value)
      console.log(e)
    }
  }

  return (
    <div className="App">
      
      {/* Header */}
      <div className={styles.input__section}>
        <p><b>GitHub</b> Username</p>

        <input 
          className={styles.input}
          ref={usernameInputRef}
          onKeyDown={handleSubmit}
        />
        {/* <TextField 
          className={styles.input}
          label="username" 
          variant="outlined"
          inputRef={usernameInputRef}
          onKeyDown={handleSubmit}
          size='medium'
          // sx={{
          //   fontSize: '3rem',

          // }}
        /> */}
      </div>

      {/* User */}
      {
        username && (
          userLoading ? <UserDataLoading /> : (
            userDataError || !userData ? <UserDataError /> : <User userData={userData} />
          )
        )
      }
      
    </div>
  );
}

export default App;
