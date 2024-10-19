// import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import HeroSection from "../../components/user/Home/Hero";
import About from "../../components/user/Home/About";
import Courses from "../../components/user/Home/Courses";
import ScrollSection from "../../components/user/Home/ScrollSection";
import Instructors from "../../components/user/Home/Instructors";
// import Carousel from "../../components/user/Home/Carousel";
import Graduates from "../../components/user/Home/Graduates";
import { useEffect } from "react";



const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <HeroSection />
    <About/>
    <Courses/>
    {/* <Carousel/> */}
    <Instructors/>
    <ScrollSection/>
    <Graduates/>
    </>
  )
}

export default HomePage
