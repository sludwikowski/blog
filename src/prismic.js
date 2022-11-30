import * as prismic from '@prismicio/client'

export const repositoryName = 'my-cat-lucky'

export const client = prismic.createClient(repositoryName, {
  accessToken: '',

  routes: [
    {
      type: 'header',
      path: '/'
    }
  ]
})
