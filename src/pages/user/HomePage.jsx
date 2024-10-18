// import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import HeroSection from "../../components/user/Home/Hero";
import About from "../../components/user/Home/About";
import Courses from "../../components/user/Home/Courses";
import ScrollSection from "../../components/user/Home/ScrollSection";
import Instructors from "../../components/user/Home/Instructors";



const HomePage = () => {
  // const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
    <HeroSection />
    <About/>
    <Courses/>
    <Instructors/>
    <ScrollSection/>
      {/* <div className='h-screen flex justify-center items-center dark:bg-black'>
        <button className='rounded bg-black dark:bg-white px-4 py-2 text-white dark:text-black'>Button</button>
        <button onClick={toggleTheme}
          className='rounded bg-teal-300 px-4 py-2 text-gray dark:text-white'>
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div> */}
    </>
  )
}

export default HomePage
