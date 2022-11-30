/* eslint-disable react/no-children-prop,react/prop-types */
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PaginationRoute from './PaginationRoute'

const Pagination = props => {
  const { children, lenght, path, limit = 1 } = props

  return (
    <Routes>
      <Route
        path={`${path}/:page` & {}}
        element={
          <PaginationRoute
            path={path}
            limit={limit}
            lenght={lenght}
            children={children}
          />
                }
      >
      </Route>
    </Routes>
  )
}

export default Pagination
