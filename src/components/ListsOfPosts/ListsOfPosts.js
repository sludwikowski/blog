/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material'

import { PrismicText } from '@prismicio/react'

export const ListsOfPosts = ({ document }) => {
  const { data } = document

  return (
    <Grid
      item
      xs={12}
      md={6}
    >
      <br/>
      <Card sx={{ display: 'flex', maxHeight: 300, width: 1148 }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography
            component={'h2'}
            variant={'h5'}
          >
            <PrismicText field={data.post_title}/>
          </Typography>
          <Typography
            variant={'subtitle1'}
            color={'text.secondary'}
          >
            {data.post_date}
          </Typography>
          <Typography
            variant={'subtitle1'}
            fontWeight={300}
            paragraph
          >
            <PrismicText field={data.post_description}/>
          </Typography>
          <Typography
            variant={'subtitle1'}
            color={'primary'}
          >

            <Link
              to={'/post/'.concat(document.uid)}
              style={{ textDecoration: 'none' }}
            >
              <Button
                color={'secondary'}
              >
                Czytaj Więcej...
              </Button>
            </Link>

          </Typography>
        </CardContent>
        <CardMedia
          component={'img'}
          sx={{ width: 300, display: { xs: 'none', sm: 'block' } }}
          alt={data.post_image.alt}
          src={data.post_image.url}
        />
      </Card>
      <br/>
    </Grid>
  )
}

export default ListsOfPosts
