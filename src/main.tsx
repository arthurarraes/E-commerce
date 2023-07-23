import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.module.css'

  import {
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom'


  import {Shop} from './routes/Shop.tsx'
import { Home } from './routes/Home.tsx'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      children: [
        {
          path: 'shop',
          element: <Shop/>,
        }
      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
