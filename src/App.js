import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Category from './pages/Category'
import { PostPage } from './pages/PostPage'
import Footer from './components/Footer'

import { ThemeProvider, CssBaseline, Container } from '@mui/material'

import { theme } from './theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth={'lg'}>
        <PrismicProvider client={client}>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route
                path={'/*'}
                element={<Navigate to={'/home/1'}/>}
              />
              <Route
                path={'/home/:page/*'}
                element={<Home/>}
              />
              <Route
                path={'/category/:uid'}
                element={<Category/>}
              />
              <Route
                path={'/post/:id'}
                element={<PostPage/>}
              />
              <Route
                path={'/404.html'}
                element={<NotFound/>}
              />
              <Route
                path={'/*'}
                element={<Navigate to={'/404.html'}/>}
              />
            </Routes>

            <Footer
              description={'"Kot jest w stanie wypełnić każdą dowolną przestrzeń, którą w danej chwili uzna za swoją."'}
            />
          </BrowserRouter>
        </PrismicProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App
