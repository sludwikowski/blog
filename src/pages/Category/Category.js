import React from 'react'
import { useParams } from 'react-router-dom'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

import ListsOfPosts from '../../components/ListsOfPosts'

export const Category = () => {
  const { uid } = useParams()
  const [documents] = useAllPrismicDocumentsByType('post')

  return (
    <>
      {documents && (
        documents.filter((document) => {
          return document.data.post_categories.map((n) => {
            return n.post_category.uid
          }).includes(uid)
        }).map((document, index) =>
          <ListsOfPosts
            document={document}
            key={index}
          />
        )
      )}
    </>
  )
}

export default Category
