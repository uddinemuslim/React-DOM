
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import { Children } from 'react'
import Home from './components/home/home'
import About from './components/about/about'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: 'about',
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
