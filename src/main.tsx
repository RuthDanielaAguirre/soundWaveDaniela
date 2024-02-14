import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './Layout.tsx';
import './index.css'
import {  RouterProvider} from "react-router-dom";
import { router } from './routes/router.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
