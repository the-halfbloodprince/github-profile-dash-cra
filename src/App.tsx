import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import TextField from '@mui/material/TextField'
import axios from 'axios';
import { useFetchUserData } from './hooks/useFetchGithubData';
import UserDataLoading from './components/UserDataLoading';
import User from './components/User';
import UserDataError from './components/UserDataError';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import RepoLoading from './components/RepoLoading';
import Repos from './components/Repos';

// type PerPageCount = 5 | 10 | 15 | 20

function App() {

  const usernameInputRef = useRef<HTMLInputElement>(null)
  const [username, setUsername] = useState<string>("the-halfbloodprince")
  const [page, setPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(12)

  const {
    userData, userLoading, userDataError,
    repos, reposLoading, reposError
  } = useFetchUserData(username, page, itemsPerPage)

  useEffect(() => {
    setPage(1)
  }, [username])

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setUsername(usernameInputRef.current!.value)
      console.log(e)
    }
  }

  const handlePageChange = (e: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }

  const handleItemsPerPageChange = (e: SelectChangeEvent) => {
    setItemsPerPage(parseInt(e.target.value))
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

      {/* repos section */}
      {
          (userData && repos) && (
              <>
                <div className={styles.repos_table_header}>
                  <p className={styles.repos_heading}>Repositories {page} </p>
                  <Select
                    value={itemsPerPage.toString()}
                    label="Items"
                    onChange={handleItemsPerPageChange}
                    sx={{
                      height: 'fit-content'
                    }}
                  >
                    <MenuItem value={'12'}>12</MenuItem>
                    <MenuItem value={'15'}>15</MenuItem>
                    <MenuItem value={'21'}>21</MenuItem>
                    <MenuItem value={'30'}>30</MenuItem>
                  </Select>
                </div>

                {
                    reposLoading ? <RepoLoading count={itemsPerPage} /> : <Repos repos={repos} />
                }

                <Pagination
                  page={page}
                  count={Math.ceil(userData.publicRepositoryCount/itemsPerPage)} 
                  shape="rounded"
                  onChange={handlePageChange}
                  sx={{ float: 'right' }}
                />

              </>
          )
      }

    </div>
  );
}

export default App;
