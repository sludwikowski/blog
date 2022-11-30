import React from 'react'
import { useParams } from 'react-router-dom'

import { usePrismicDocumentByUID } from '@prismicio/react'

import Post from '../../components/Post'

export const PostPage = () => {
  const { id } = useParams()
  const [document] = usePrismicDocumentByUID('post', id)

  return (
    <>
      {document && (
        <Post documentData={document.data}/>
      )}
    </>
  )
}

export default PostPage
