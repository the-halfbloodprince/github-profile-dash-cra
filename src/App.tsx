import React, { ChangeEvent, useEffect, useRef, useState, FC } from 'react';
import styles from './App.module.css';
import UserLoadingScreen from './components/User/User_Loading';
import User from './components/User/User';
import UserErrorScreen from './components/User/User_Error';
import { Pagination, SelectChangeEvent } from '@mui/material';
import Repos from './components/Repos/Repos';
import LoadingRepos from './components/Repos/Repos_Loading';
import RepoError from './components/Repos/Repos_Error';
import { useFetchUserData } from './hooks/useFetchUser';
import { useFetchReposData } from './hooks/useFetchRepos';
import { useTheme } from '@mui/material/styles';
import NoUser from './components/App/NoUser';
import Header from './components/App/Header';
import Main from './components/App/AppLayout'
import ItemsPerPageSelect from './components/App/ItemsPerPageSelect';

// ! using prop drilling for the initial one or two layers
// ! to facilitate some things which do not require app wide consumption
// ! while also making sure to not make everything into components and prop drill everything

type AppProps = {
  darkModeEnabled: boolean
  themeToggler: () => void
}

const App: FC<AppProps> = ({ darkModeEnabled, themeToggler }) => {

  // theme
  const theme = useTheme()
  // const isDarkMode = theme.palette.mode === 'dark'

  const availableValuesForItemsPerPage = ['12', '15', '21', '30']

  // refs
  const usernameInputRef = useRef<HTMLInputElement>(null)
  
  // states
  const [username, setUsername] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(12)

  // data from custom fetch hook
  const { 
    userData, 
    userLoading, 
    userDataError 
  } = useFetchUserData(username)
  
  const { 
    repos, 
    reposLoading, 
    reposError 
  } = useFetchReposData(username, currentPage, itemsPerPage)
  
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
    <Main>
      
      {/* Header */}
      <Header
          darkModeEnabled={darkModeEnabled}
          handleUsernameSubmit={handleUsernameSubmit}
          themeToggler={themeToggler}
          usernameInputRef={usernameInputRef}
      />

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
                  <p className={styles.repos_heading}>
                    Repositories
                  </p>
                  {/* select element for itemsPerPage */}
                  <ItemsPerPageSelect
                      availableValuesForItemsPerPage={availableValuesForItemsPerPage}
                      handleItemsPerPageChange={handleItemsPerPageChange}
                      itemsPerPage={itemsPerPage}
                  />
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
    </Main>
  );
}



export default App;