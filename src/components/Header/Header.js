import React from 'react'

import { Toolbar, Typography } from '@mui/material'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'

import { PrismicText, useAllPrismicDocumentsByType, useSinglePrismicDocument } from '@prismicio/react'

import CategoryItem from '../CategoryItem'

function Header () {
  const [document] = useSinglePrismicDocument('header')
  const [documents] = useAllPrismicDocumentsByType('category')

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component={'h4'}
          variant={'h4'}
          color={'rgba(0, 0, 0, 0.54)'}
          align={'center'}
          noWrap
          sx={{ flex: 1 }}
        >
          {document && (
            <PrismicText field={document.data.name}/>
          )}
          <br/>
          <AllInclusiveIcon
            color={'action'}
            sx={{ fontSize: 30 }}
          />
        </Typography>
      </Toolbar>
      <Typography
        component={'p'}
        variant={'body1'}
        color={'rgba(0, 0, 0, 0.54)'}
        align={'center'}
        noWrap
        sx={{ flex: 1 }}
      >
        Kategorie
      </Typography>
      <Toolbar
        component={'nav'}
        variant={'dense'}
        sx={{ justifyContent: 'space-evenly', overflowX: 'auto', borderBottom: 1, borderColor: 'divider' }}
      >
        {documents && (
          documents.map((document, index) => (
            <CategoryItem
              document={document}
              key={index}
            />

          )))}
      </Toolbar>
    </React.Fragment>
  )
}

export default Header
