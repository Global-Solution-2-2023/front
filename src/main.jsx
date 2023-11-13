import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import App from './App.jsx'

const router = createBrowserRouter([

  {
    path: '/', element: <App />,
    errorELement: <Error />,

    children: [
      {path: '/', element: <Home />}
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
