import { motion } from 'framer-motion'
import { FaCalendar, FaBook } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import english from '../../assets/images/english.svg'
import german from '../../assets/images/german.svg'
import russian from '../../assets/images/russian.png'
import { Link } from 'react-router-dom'
import teacher1 from '../../assets/images/teacher1.webp';
import teacher2 from '../../assets/images/teacher2.webp';
import teacher4 from '../../assets/images/teacher4.webp';
import { useEffect } from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

// Blog yazıları üçün nümunə məlumatlar
const blogPosts = [
    {
        id: 1,
        title: "İngilis Dili Öyrənməyə Giriş",
        excerpt: "İngilis dili öyrənərək qlobal kommunikasiya bacarıqlarınızı gücləndirin və beynəlxalq iş imkanlarına açıq olun. Bu kursla dili asan və effektiv şəkildə mənimsəyin.",
        author: {
            name: "Səbinə Hümbətova",
            avatar: teacher4
        },
        publishDate: "2023-05-15",
        course: "Başlanğıc üçün İngilis Dili",
        slug: "introduction-to-learning-english",
        image: english
    },
    {
        id: 2,
        title: "Alman Dili Qrammatikasının Əsasları",
        excerpt: "Alman dilinin qrammatikasını öyrənərək dilin strukturunu düzgün mənimsəyin və nitq qabiliyyətlərinizi inkişaf etdirin. Qrammatik qaydalar və praktiki nümunələrlə dolu bu kurs sizin üçün mükəmməl başlanğıc olacaq.",
        author: {
            name: "Səbinə Məhərrəmova",
            avatar: teacher1
        },
        publishDate: "2023-05-10",
        course: "Alman Dili Qrammatikası",
        slug: "german-grammar-basics",
        image: german
    },
    {
        id: 3,
        title: "Rus Dili Öyrənməyə Giriş",
        excerpt: "Rus dili öyrənərək yeni mədəniyyətləri kəşf edin və beynəlxalq əlaqələrinizi genişləndirin. Bu kursla rus dilini asanlıqla öyrənə bilərsiniz.",
        author: {
            name: "Elvira Ocaxquliyeva",
            avatar: teacher2
        },
        publishDate: "2023-05-20",
        course: "Başlanğıc üçün Rus Dili",
        slug: "introduction-to-learning-russian",
        image: russian // Assuming you have a Russian image asset
    }
    // Daha çox blog yazısı əlavə edin...
];


export default function BlogsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToPosts = () => {
        const postsSection = document.getElementById('blog-posts')
        if (postsSection) {
            postsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-[screen] ">
            <section
                className="relative pt-12 sm:pt-0  min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
            >
                {/* Arxa fon şəkilləri */}
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

                <div className="container mx-auto  px-6 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Bloqumuza Xoş Gəlmisiniz
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Ən son yeniliklərdən xəbərdar olun!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Button
                                onClick={scrollToPosts}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Postlarımızı Kəşf Edin
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Animasiya ilə aşağıya sürüşdürmə düyməsi */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, 15, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        onClick={scrollToPosts}
                        className="cursor-pointer"
                    >
                        <FiChevronDown size={50} className=" text-black  dark:text-white" />
                    </motion.div>
                </div>
            </section>

            <div id="blog-posts" className="container mx-auto py-32 p-2">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden">
                                <div className="relative h-48 w-full">
                                    <img className='w-full h-full object-cover'
                                        src={post.image}
                                        alt={post.title}
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="dark:text-white text-black">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <FaCalendar className="mr-2" />
                                            {post.publishDate}
                                        </div>
                                        <div className="flex items-center">
                                            <FaBook className="mr-2" />
                                            {post.course}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <Avatar>
                                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm font-medium dark:text-white text-black">{post.author.name}</span>
                                    </div>
                                    <Link to={`/blogs/${post.id}`} passHref>
                                        <Button >Daha Çox Oxuyun</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-20">
                    {blogPosts.map((post) => (
                        <CardContainer key={post.id} className="inter-var w-full">
                            <CardBody className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full min-h-[550px] rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {post.title}
                                </CardItem>

                                <CardItem translateZ="70" className="w-full mt-4">
                                    <img
                                        src={post.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="40"
                                    className="text-muted-foreground text-base max-w-sm mt-3 "
                                >
                                    {post.excerpt}
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className=" py-2 text-black rounded-xl text-xs font-normal dark:text-white"
                                >
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <FaCalendar className="mr-2" />
                                            {post.publishDate}
                                        </div>
                                        <div className="flex items-center">
                                            <FaBook className="mr-2" />
                                            {post.course}
                                        </div>
                                    </div>
                                </CardItem>
                                <div className="flex justify-between items-center mt-">
                                    <CardItem
                                        translateZ={20}
                                        className="px-4 py-2 text-black rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <Avatar>
                                                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-sm font-medium dark:text-white text-black">{post.author.name}</span>
                                        </div>
                                    </CardItem>
                                    <Link to={`/blogs/${post.id}`} passHref>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl  bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Daha çox oxuyun
                                    </CardItem>
                                    </Link>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </div>
    )
}
