import { motion } from 'framer-motion';
import heroBg from '../../../assets/images/bgimage.png';
import heroİmg from '../../../assets/images/usermap.png';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import { CardContainer, CardItem } from '@/components/ui/3d-card';

export default function HeroSection() {
    const { isDarkTheme } = useContext(ThemeContext);

    // Function to smoothly scroll to the About section
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about'); // Make sure this ID matches the About section
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToCourses = () => {
        const courseSection = document.getElementById('courses'); // Make sure this ID matches the About section
        if (courseSection) {
            courseSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const words = ["yaxşı", "bilikli", "peşəkar"];
    const futureWords = ["gələcəyini", "həyatını"];

    const shakeAnimation = {
        initial: { x: 0 },
        animate: {
            x: [0, -5, 5, -5, 5, 0], // Define the shake pattern
            transition: {
                delay: 0.8, 
                duration: 0.5, // Duration of one shake
                repeat: Infinity, // Repeat infinitely
                repeatDelay: 3, // Delay between shakes
                ease: "easeInOut" // Easing for smoothness
            }
        }
    };

    return (
        <section
            style={{
                backgroundImage: !isDarkTheme ? `url(${heroBg})` : 'none',
                backgroundRepeat: 'no-repeat', // Prevent background image from repeating
                backgroundSize: 'cover', // Make sure the background covers the section
                backgroundPosition: 'center' // Center the background image
            }} className="relative sm:pt-0 pt-12 bg-gradient-to-b from-blue-100 dark:bg-gray-900 to-white min-h-[800px] md:min-h-[950px] flex items-center justify-center overflow-hidden"
        >
            {/* Background shapes */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Bright Academy tədris mərkəzinə xoş gəlmisiniz!
                        </motion.h1>
                        <motion.div
                            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8 min-h-[115px]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            BrightAcademy ilə uğura bir addım daha yaxınsınız – Bizimlə öyrən, daha <FlipWords words={words} />ol, və <FlipWords words={futureWords} />işıqlandır!
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Button
                                onClick={scrollToCourses} // Function to scroll down
                                className="poppins bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Kurslarımızı Kəşf Edin
                            </Button>
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto flex justify-center"
                        >
                            {/* <img
                                src={heroİmg}
                                alt="Bright Academy Students"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            /> */}
                            <CardContainer>

                                <CardItem translateZ="30" className="w-full mt-4">
                                    <img
                                        src={heroİmg}
                                        // height="6000"
                                        // width="6000"
                                        className="w-full object-cover  "
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardContainer>
                            <motion.div
                                className="absolute -bottom-10 -right-3 bg-yellow-400 dark:bg-yellow-600 rounded-full sm:p-4 p-2 shadow-lg"
                                {...shakeAnimation} // Apply the shaking animation
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-8 sm:w-8 w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Animated Scroll Down Button */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 15, 0] }} // Bouncing effect
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    onClick={scrollToAbout} // Function to scroll down
                    className="cursor-pointer"
                >
                    <FiChevronDown size={50} className=" text-black  dark:text-white" />
                </motion.div>
            </div>
        </section>
    );
}
