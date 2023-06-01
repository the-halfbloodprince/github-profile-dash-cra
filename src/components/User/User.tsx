import React, { FC } from 'react'
import styles from './User.module.css'
import { UserData, Repo } from '../../models/GitHub'
import { Paper, useTheme, alpha, Typography, Box, Stack } from '@mui/material'
import LocationIcon from '@mui/icons-material/Place'
import LinkIcon from '@mui/icons-material/Link';

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
        // color: theme.palette.common.black
      }}
    >
      <div className={styles.text}>
        
        {/* name */}
        <p className={styles.name}> { name } </p>
        
        {/* Username */}
        <a href={html_url} target='_blank'>
          <Typography 
            className={styles.username}
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '2rem',
              '&:hover': {
                color: theme.palette.text.primary,
              }
            }}  
          > <LinkIcon className={styles.linkIcon} /> <div>{ username }</div> </Typography>
        </a>
        {/* Bio */}
        <p className={styles.bio}> { bio || "No bio available" } </p>
        {/* Location */}
        <p className={styles.location}>
          { 
            location && (
              <>
                <LocationIcon sx={{
                  color: theme.palette.text.primary
                }} />
                <p>{ location }</p>
              </>
            )
          }
        </p>

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
          <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'.6rem'}
           sx={{
              fontSize: '1.2rem',
              boxShadow: `${theme.palette.text.primary} 2px 2px 1px`,
              borderRadius: '8px',
              padding: '.8rem 1rem',
              fontWeight: 600,
              background: alpha(theme.palette.background.paper, .2),
              color: alpha(theme.palette.text.primary, .5), 
            }} 
            className={styles.followerCount}>
               Followers: 
               <Typography sx={{
                 fontWeight: 600,
                 color: theme.palette.text.primary
               }}>
                 { followerCount } 
                </Typography> 
          </Stack>

          {/* following */}
          <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'.6rem'}
           sx={{
              fontSize: '1.2rem',
              boxShadow: `${theme.palette.text.primary} 2px 2px 1px`,
              borderRadius: '8px',
              padding: '.8rem 1rem',
              fontWeight: 600,
              background: alpha(theme.palette.background.paper, .2),
              color: alpha(theme.palette.text.primary, .5), 
            }} 
            className={styles.followerCount}>
               Following: 
               <Typography sx={{
                fontWeight: 600,
                color: theme.palette.text.primary
               }}>
                 { followingCount } 
                </Typography> 
          </Stack>
          
          {/* Public Repositories */}
          <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'.6rem'}
           sx={{
              fontSize: '1.2rem',
              boxShadow: `${theme.palette.text.primary} 2px 2px 1px`,
              borderRadius: '8px',
              padding: '.8rem 1rem',
              fontWeight: 600,
              background: alpha(theme.palette.background.paper, .2),
              color: alpha(theme.palette.text.primary, .5), 
            }} 
            className={styles.followerCount}>
               Public Repositories: 
               <Typography sx={{
                fontWeight: 600,
                color: theme.palette.text.primary
               }}>
                 { publicRepositoryCount } 
                </Typography> 
          </Stack>
        </Stack>
      </div>
      <div className={styles.img_section}>
        <img src={avatarUrl} alt={`${name}'s profile picture`} />
      </div>
    </Paper>
  )
}

export default User