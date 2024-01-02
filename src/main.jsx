import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {

  RouterProvider,
  } from "react-router-dom"
import router from './Router/Router.jsx'
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProviders from './providers/AuthProviders.jsx'
const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProviders>
    <QueryClientProvider client={queryClient}>
   
     <RouterProvider router={router} />
    
     </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
