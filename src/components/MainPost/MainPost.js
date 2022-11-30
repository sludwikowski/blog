import * as React from 'react'
import PropTypes from 'prop-types'

import { Paper, Typography, Grid, Box } from '@mui/material'

function MainPost (props) {
  const { post } = props

  return (

    <Paper
      sx={{
        position: 'relative',
        top: 10,
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 3,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.5)'
        }}
      />
      <Grid container>
        <Grid
          item
          md={6}
        >
          <Box
            sx={{
              position: 'relative',
              p: { xs: 8, md: 12 },
              pr: { md: 0 }
            }}
          >
            <Typography
              component={'h1'}
              variant={'h3'}
              color={'inherit'}
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              variant={'h5'}
              color={'inherit'}
              paragraph
            >
              {post.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

MainPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default MainPost
