import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Pages/Route.jsx';
import ThemeProvider from './context/ThemeProvider.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import CarsProvider from './hook/CarsProvider.jsx';
import ReuseProvider from './context/ReuseProvider.jsx';







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
     <ThemeProvider>
         <CarsProvider>
          <ReuseProvider>
          <RouterProvider router={router} />
          </ReuseProvider>
         </CarsProvider>   
    </ThemeProvider>
  </AuthProvider>
    
  </React.StrictMode>,
)
