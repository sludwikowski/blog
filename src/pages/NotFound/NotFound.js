import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Typography } from '@mui/material'

export const NotFound = (props) => {
  return (
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
        Podana strona nie istnieje! Wróć do
        <Link to={'/'}>strony głównej</Link>.
      </Typography>

    </Box>
  )
}

export default NotFound
