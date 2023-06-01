import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import { useFetchUserData } from './hooks/useFetchGithubData';
import UserLoadingScreen from './components/User/User_Loading';
import User from './components/User/User';
import UserErrorScreen from './components/User/User_Error';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import Repos from './components/Repos/Repos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoadingRepos from './components/Repos/Repos_Loading';
import RepoError from './components/Repos/Repos_Error';

function App() {

  const availableValuesForItemsPerPage = ['12', '15', '21', '30']

  // refs
  const usernameInputRef = useRef<HTMLInputElement>(null)
  
  // states
  const [username, setUsername] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(12)

  // data from custom fetch hook
  const {
    userData, userLoading, userDataError,
    repos, reposLoading, reposError
  } = useFetchUserData(username, currentPage, itemsPerPage)

  // reset the current page to 1 every time username changes
  useEffect(() => {
    setCurrentPage(1)
  }, [username])

  // event handlers
  const handleUsernameSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setUsername(usernameInputRef.current!.value)
    }
  }

  const handlePageChange = (e: ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage)
  }

  const handleItemsPerPageChange = (e: SelectChangeEvent) => {
    setItemsPerPage(parseInt(e.target.value))
  }

  // the UI
  return (
    <div className="App">
      
      {/* Header */}
      <div className={styles.input__section}>
        <p>
          <div><b>GitHub</b> Username</div> 
          <ArrowForwardIcon className={styles.arrow} />
        </p>

        {/* input element */}
        <input 
          className={styles.input}
          ref={usernameInputRef}
          onKeyDown={handleUsernameSubmit}
        />
      </div>

      {/* User Section */}

      {
        // if no username then show the no user section
        username ? (
          // if username is there but it's loading the user details, then show loading screen, 
          userLoading ? <UserLoadingScreen /> : (
            // else if there is an error or userdata is not set, show the error screen
            userDataError || !userData ? <UserErrorScreen status={userDataError} /> : 
              // else if everything is fine, show the user data screen
              <User userData={userData} />
          )
        ) : (
          // the no user screen
          <NoUser />
        )
      }

      {/* repos section */}

      {
          // if no user data then repo section shouln't be visible
          (userData) && (
              <>
                {/* the repositories grid header */}
                <div className={styles.repos_table_header}>
                  
                  <p className={styles.repos_heading}>Repositories</p>
                  
                  {/* select element for itemsPerPage */}
                  <Select
                    value={itemsPerPage.toString()}
                    label="Items"
                    onChange={handleItemsPerPageChange}
                    sx={{
                      height: 'fit-content'
                    }}
                  >
                    {/* the options */}
                    {
                      // loop through all the avialable sizes for itemsPerPage
                      availableValuesForItemsPerPage.map((size) => (
                        <MenuItem value={size}>{size}</MenuItem>
                      ))
                    }
                  </Select>
                </div>

                {/* the repos list section */}
                
                {
                  // if the repos are loading
                  reposLoading ? 
                    // show the loading repos section with count being the number of items that are being loaded
                    <LoadingRepos count={itemsPerPage} /> : 
                    (
                      // else if there is an error in loading the repos
                      (reposError || !repos) ? 
                        // show the error screen for repos
                        <RepoError /> : 
                        // else show the repos
                        <Repos repos={repos} />
                    )
                }

                {/* pagination switcher component */}
                <Pagination
                  page={currentPage}
                  // count of pages is generated dynamically based on the number of public repos user has 
                  // and the number of repos he wants to show at a time
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

const NoUser = () => {
  return (
    <div className={styles.noUser}>Enter the username of your GitHub Profile and hit Enter</div>
  )
}

export default App;
