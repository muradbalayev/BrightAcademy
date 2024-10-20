import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUsers, FaAward } from 'react-icons/fa';
import aboutImg from '../../assets/images/about.png';
import { useEffect } from 'react';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-between md:gap-3 gap-10 bg-gradient-to-b from-blue-100 dark:from-gray-900 to-white dark:to-gray-800 min-h-[600px] md:min-h-[700px] md:pt-12 pb-10 pt-32">
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

                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="container mx-auto px-4"
                    >
                        <h1 className="text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">Haqqımızda</h1>
                        <p className="text-xl text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                            Bright Academy, 2010-cu ildən bəri Azərbaycanda fəaliyyət göstərən qabaqcıl tədris mərkəzidir. Biz tələbələrimizə yüksək keyfiyyətli təhsil təklif edir və onların akademik və peşəkar inkişafına dəstək oluruq.
                        </p>
                    </motion.div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto flex justify-center"
                    >
                        <img
                            src={aboutImg}
                            alt="Bright Academy Students"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </motion.div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Nə Edirik?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: FaGraduationCap, title: "Yüksək Keyfiyyətli Təhsil", description: "Sənaye ekspertləri tərəfindən tədris olunan yüksək səviyyəli kurslar təqdim edirik." },
                            { icon: FaBriefcase, title: "Karyera Dəstəyi", description: "Karyera xidmətlərimiz tələbələrin arzuladıqları işlərə sahib olmasına kömək edir." },
                            { icon: FaUsers, title: "İcma", description: "Öyrənənlər və peşəkarların canlı bir icmasına qoşulun." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                            >
                                <item.icon className="text-4xl mb-4 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="bg-indigo-600 dark:bg-indigo-800 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Nəticələrimiz</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: FaGraduationCap, value: "5000+", label: "Məzunlar" },
                            { icon: FaBriefcase, value: "90%", label: "İşə Yerləşmə" },
                            { icon: FaUsers, value: "50+", label: "Ekspert Təlimçilər" },
                            { icon: FaAward, value: "50+", label: "Sənaye Mükafatları" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <item.icon className="text-5xl mb-4 text-white mx-auto" />
                                <h3 className="text-3xl font-bold mb-2 text-white">{item.value}</h3>
                                <p className="text-xl text-indigo-200">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;