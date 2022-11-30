import * as React from 'react'
import PropTypes from 'prop-types'

import { Box, Container, Typography, Link } from '@mui/material'

function Copyright () {
  return (
    <Typography
      variant={'body2'}
      color={'text.secondary'}
      align={'center'}
    >
      {'Copyright © '}
      <Link
        color={'inherit'}
        href={'https://github.com/sludwikowski'}
      >
        @sludwikowski
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

function Footer (props) {
  const { description } = props

  return (
    <Box
      component={'footer'}
      sx={{ bgcolor: '#f1f1f1', py: 4 }}
    >
      <Container maxWidth={'lg'}>
        <Typography
          variant={'subtitle1'}
          align={'center'}
          color={'text.secondary'}
          component={'p'}
        >
          {description}
        </Typography>
        <Copyright/>
      </Container>
    </Box>
  )
}

Footer.propTypes = {
  description: PropTypes.string.isRequired
}

export default Footer
