import { motion } from 'framer-motion'
import { FaCalendar, FaBook } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import react from '../../assets/images/react.jpeg'
import { Link } from 'react-router-dom'
import teacher from '../../assets/images/teacher.webp';
import student from '../../assets/images/student2.jpg';
import { useEffect } from 'react';

// Mock data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "Introduction to React Hooks",
        excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
        author: {
            name: "Jane Doe",
            avatar: teacher
        },
        publishDate: "2023-05-15",
        course: "Advanced React",
        slug: "introduction-to-react-hooks",
        image: react
    },
    {
        id: 2,
        title: "Building Scalable APIs with Node.js",
        excerpt: "Discover best practices for creating robust and scalable APIs using Node.js and Express.",
        author: {
            name: "John Smith",
            avatar: student
        },
        publishDate: "2023-05-10",
        course: "Backend Development",
        slug: "building-scalable-apis-with-nodejs",
        image: react
    },
    // Add more blog posts here...
]

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
        <div className="min-h-[screen] bg-background">
            <section
                className="relative pt-12 sm:pt-0 bg-gradient-to-b from-blue-100 dark:from-gray-900 to-white dark:to-gray-800 min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
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

                <div className="container mx-auto  px-6 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Welcome to Our Blog
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Discover the latest insights, tutorials, and trends in web development and technology.
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
                                Explore Our Posts
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Animated Scroll Down Button */}
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

            <div id="blog-posts" className="container mx-auto py-32">
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
                                    <Link to={`/blogs/react`} passHref>
                                        <Button >Read More</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}