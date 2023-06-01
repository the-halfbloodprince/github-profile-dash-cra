import React, { FC } from 'react'
import styles from './User.module.css'
import { UserData, Repo } from '../../models/GitHub'
import { Paper, useTheme, alpha, Typography, Box, Stack } from '@mui/material'
import LocationIcon from '@mui/icons-material/Place'
import LinkIcon from '@mui/icons-material/Link';
import StatBox from './StatBox'

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
  
  const theme = useTheme()

  return (
    <Paper 
      className={styles.main}
      sx={{
        background: theme.palette.background.paper,
        borderRadius: '16px',
      }}
    >
      <div className={styles.text}>
        
        {/* name */}
        <p className={styles.name}> { name } </p>
        
        {/* Username */}
        <a href={html_url} target='_blank'>
          <Box 
            className={styles.username}
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '2rem',
              '&:hover': {
                color: theme.palette.text.primary,
              }
            }}  
          > <LinkIcon className={styles.linkIcon} /> <div>{ username }</div> </Box>
        </a>

        {/* Bio */}
        { bio && <p className={styles.bio}> { bio } </p> }
        
        {/* Location */}
        {
            location && (
              <div className={styles.location}>
                <LocationIcon sx={{
                  color: theme.palette.text.primary
                }} />
                <p>{ location }</p>
              </div>
            )
        }

        {/* Stats */}
        <Stack
          className={styles.numbers}
          direction={{
            sm: 'column',
            md: 'row'
          }}
          gap={'1rem'}
        >

          {/* followers */}
          <StatBox 
            stat={followerCount}
            of={"Followers"}
          />

          {/* following */}
          <StatBox 
            stat={followingCount}
            of={"Following"}
          />
          
          {/* Public Repositories */}
          <StatBox 
            stat={publicRepositoryCount}
            of={"Public Repos"}
          />
          
        </Stack>
      </div>

      {/* avatar */}
      <div className={styles.img_section}>
        <img src={avatarUrl} alt={`${name}'s profile picture`} />
      </div>

    </Paper>
  )
}

export default User