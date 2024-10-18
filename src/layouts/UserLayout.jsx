import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
