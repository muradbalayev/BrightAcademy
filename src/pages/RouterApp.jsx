import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import AdminPage from './admin/AdminPage'
import HomePage from './user/HomePage'
import UserLayout from '../layouts/UserLayout'
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
        <div className={`${isDarkTheme ? 'dark' : ''} max-w-[1920px] mx-auto overflow-hidden relative`}>
            <div className='bg-[#f4f6fa] dark:bg-gray-900 min-h-screen relative'>
                {/* Animated background elements */}
                <motion.div
                    className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        animate={{
                            x: ['-25%', '125%'],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            x: {
                                duration: 60,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            },
                            y: {
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    />
                    <motion.div
                        className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        animate={{
                            x: ['125%', '-25%'],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            x: {
                                duration: 70,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            },
                            y: {
                                duration: 23,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-56 h-56 bg-green-300 dark:bg-green-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        animate={{
                            x: ['-50%', '150%'],
                            y: [0, 60, 0],
                        }}
                        transition={{
                            x: {
                                duration: 80,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            },
                            y: {
                                duration: 18,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-60"
                        animate={{
                            x: ['100%', '-100%'],
                            y: [0, 40, 0],
                        }}
                        transition={{
                            x: {
                                duration: 75,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            },
                            y: {
                                duration: 25,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    />
                </motion.div>

                {/* Main content */}
                <div className="relative z-10">
                    <BrowserRouter>
                        <Routes>
                            <Route element={<UserLayout />}>
                                <Route index path='/' element={<HomePage />} />
                                <Route path='/blogs' element={<BlogsPage />} />
                                <Route path='/blogs/:blogId' element={<BlogPage />} />
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
        </div>
    )
}

export default RouterApp