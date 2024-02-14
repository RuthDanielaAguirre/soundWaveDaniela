import './index.css'
import  NavBar  from './components/Nav/Navbar'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}
