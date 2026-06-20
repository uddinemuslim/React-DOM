
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import { Children } from 'react'
import { Home, About, Contact, User, Github } from './components'
import { GithubInfoLoader } from './components/github/github'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='user/:userid' element = {<User/>}/>
      <Route 
       loader={GithubInfoLoader}
       path='github'
       element = {<Github/>}
      
       />

    </Route>
  )

)

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
