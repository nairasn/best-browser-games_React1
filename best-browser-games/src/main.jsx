import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createdBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createdBrowserRouter([
  {
    path:"/",
    element: <div>Hello World!</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
