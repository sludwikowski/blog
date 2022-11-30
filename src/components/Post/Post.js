/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

import { PrismicText } from '@prismicio/react'

import { Typography, Box, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

export const Post = ({ documentData }) => {
  return (
    <Box
      sx={{
        pt: 4
      }}
    >
      <Link
        to={'/'}
        style={{ textDecoration: 'none' }}
      >
        <Button
          color={'secondary'}
        >
          ...powrót do strony głównej
          <HomeIcon
            sx={{ fontSize: 24 }}
          />
        </Button>
      </Link>
      <Typography
        sx={{
          pt: 4
        }}
        variant={'subtitle1'}
        color={'text.secondary'}
        fontWeight={'300'}
      >
        Data dodania: {documentData.post_date}
      </Typography>

      <Typography
        component={'h1'}
        variant={'h3'}
        align={'center'}
        color={'text.primary'}
        fontWeight={'500'}
        gutterBottom
      >
        <PrismicText field={documentData.post_title}/>
      </Typography>
      <Typography
        variant={'subtitle1'}
        align={'center'}
        color={'text.secondary'}
        paragraph
      >
        <PrismicText field={documentData.post_description}/>
      </Typography>
      <Box
        display={'flex'}
        justifyContent={'center'}
      >
        <img
          alt={documentData.post_image.alt}
          src={documentData.post_image.url}
        />
      </Box>
      <br/>
      <Typography
        variant={'body1'}
        align={'center'}
        color={'text.primary'}
        paragraph
      >
        <PrismicText field={documentData.post_text}/>
      </Typography>
    </Box>
  )
}

export default Post
