// import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import HeroSection from "../../components/user/Home/Hero";
import About from "../../components/user/Home/About";
import Courses from "../../components/user/Home/Courses";
import ScrollSection from "../../components/user/Home/ScrollSection";
import Instructors from "../../components/user/Home/Instructors";
// import Carousel from "../../components/user/Home/Carousel";
import Graduates from "../../components/user/Home/Graduates";
// import MovingCards from "../../components/user/Home/MovingCards";
import { useEffect } from "react";
import MovingCardsRight from "@/components/user/Home/MovingCards/MovingCardsRight";
import MovingCardsLeft from "@/components/user/Home/MovingCards/MovingCardsLeft";



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
    <MovingCardsRight/>
    <MovingCardsLeft/>
    <Graduates/>
    </>
  )
}

export default HomePage
