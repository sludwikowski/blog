/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { Box, ButtonGroup, Button } from '@mui/material'

const linkStyle = {
  textDecoration: 'none'
}

const PaginationRoute = (props) => {
  const { children, lenght, path, limit = 1 } = props

  const { page } = useParams()
  const begin = limit * (page - 1)
  const end = page * limit

  const length = lenght
  const pages = Math.ceil(length / limit)

  const links = new Array(pages).fill(0).map((item, index) => (
    <Button
      key={index}
      color={'secondary'}
    >
      <Link
        to={`/${path}${index + 1}`}
        style={linkStyle}
      >
        {index + 1}
      </Link>
    </Button>
  ))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {children.slice(begin, end)}
      <br/>
      <ButtonGroup
        size={'small'}
        aria-label={'small'}
      >
        {links}
      </ButtonGroup>
    </Box>
  )
}

export default PaginationRoute
