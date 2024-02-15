import './index.css'
import  NavBar  from './components/Nav/Navbar'

import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            
        </>
    )
}
