![Blog](./public/img.png)


# Blog

In this project I used [prismic](https://prismic.io/) to create contents that are downloaded from [API](https://prismic.io/docs/technologies/introduction-to-the-content-query-api). You can select a category and view the post. The website uses pagination.


**Main features**:
- React
- React Route
- Material UI

&nbsp;
 
## 💡 Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Material-UI](https://img.shields.io/badge/material--ui-2361DAFB?style=for-the-badge&logo=material-ui&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
&nbsp;
 
## 💿 Installation

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). 
&nbsp;

To run it locally you should install all dependencies:

    npm i

To run webpack and create a localhost port you should type:

    npm start
    
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
&nbsp;


&nbsp;

## 🤔 Solutions provided in the project

1. Example of the pagination used in this project.
```
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
	...
```

2. Prismic configuration.
```
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

```
&nbsp;
 
<h1 align="center">Hi , I'm Szymon <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1>
<h4 align="center">I am looking for my first professional experience.</h4>

 <h3>Connect with me:</h3>

[<img align="center" alt="linked-in" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/sludwikowski) 
[<img align="center" alt="facebook" src="https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white" />](https://www.facebook.com/szymonludwikowskii/)


&nbsp;

## 👏 Thanks / Special thanks / Credits

To  [Akademia Samouka](https://akademiasamouka.pl/) 
