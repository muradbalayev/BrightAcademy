import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './admin/AdminPage'
import HomePage from './user/HomePage'
import UserLayout from '../layouts/UserLayout'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const RouterApp = () => {

    const { isDarkTheme } = useContext(ThemeContext)
    return (
        <div className={`${isDarkTheme ? 'dark' : ''} max-w-[1920px] mx-auto overflow-hidden`}>
            <BrowserRouter>
                <Routes>
                    <Route element={<UserLayout />}>
                        <Route index path='/' element={<HomePage />} />
                    </Route>
                    <Route path='/admin' element={<AdminPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterApp
