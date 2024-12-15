import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Homepage from './routes/Homepage.jsx'
import Write from './routes/Write.jsx'
import Records from './routes/Records.jsx'
import SingleRecordPage from './routes/SingleRecordPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'

import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children:[
      {
        path:"/",
        element: <Homepage />,
      },
      {
        path:"/write",
        element: <Write />
      },
      {
        path:"/records",
        element: <Records />
      },
      {
        path:"/:slug",
        element: <SingleRecordPage />
      },
      {
        path:"/login",
        element: <LoginPage />
      },
      {
        path:"/register",
        element: <RegisterPage />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
