import React from 'react'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

import ListsOfPosts from '../../components/ListsOfPosts'
import MainPost from '../../components/MainPost'
import Pagination from '../../components/Pagination/Pagination'

const mainPost = {
  title: 'Hello,',
  description:
        'My name is Lucky',
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description'
}

export const Home = () => {
  const [documents] = useAllPrismicDocumentsByType('post')

  return (

    <>
      <MainPost post={mainPost}/>
      <br/>
      {documents && (
        <Pagination
          path={'home/'}
          limit={5}
          lenght={documents.length}
        >
          {documents && (
            documents.map((document, index) =>
              <ListsOfPosts
                document={document}
                key={index}
              />
            ))}
        </Pagination>
      )}
    </>
  )
}

export default Home
