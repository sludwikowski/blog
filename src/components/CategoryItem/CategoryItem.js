/* eslint-disable react/prop-types */
import * as React from 'react'
import { NavLink } from 'react-router-dom'

import { PrismicText } from '@prismicio/react'

import { Button } from '@mui/material'

const linkStyle = {
  textDecoration: 'none'
}

export const CategoryItem = ({ document }) => {
  const { data } = document

  return (

    <NavLink
      to={'/category/'.concat(document.uid)}
      style={linkStyle}
    >
      <Button
        color={'secondary'}
      >
        <PrismicText field={data.category_title}/>
      </Button>
    </NavLink>

  )
}

export default CategoryItem
