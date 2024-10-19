import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './admin/AdminPage'
import HomePage from './user/HomePage'
import UserLayout from '../layouts/UserLayout'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import BlogsPage from './user/BlogsPage'
import BlogPage from './user/BlogPage'
import ContactPage from './user/ContactPage'
import AboutPage from './user/AboutPage'
import CoursePage from './user/Course/CoursePage'
import InstructorPage from './user/InstructorPage'
const RouterApp = () => {

    const { isDarkTheme } = useContext(ThemeContext)
    return (
        <div className={`${isDarkTheme ? 'dark' : ''}  max-w-[1920px] mx-auto overflow-hidden`}>
            <div className='bg-[#f4f6fa] dark:bg-gray-900'>

            <BrowserRouter>
                <Routes>
                    <Route element={<UserLayout />}>
                        <Route index path='/' element={<HomePage />} />
                        <Route path='/blogs' element={<BlogsPage />} />
                        <Route path='/blogs/react' element={<BlogPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path='/courses/:courseId' element={<CoursePage />} />
                        <Route path='/instructor/:instructorId' element={<InstructorPage />} />
                    </Route>
                    <Route path='/admin' element={<AdminPage />} />
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default RouterApp
