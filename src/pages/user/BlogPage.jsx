
import { motion } from 'framer-motion'
import { FaCalendar, FaBook, FaClock } from 'react-icons/fa'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import react from '../../assets/images/react.jpeg'
import teacher from '../../assets/images/teacher.webp';
import { useEffect } from 'react'
import CommentSection from '../../components/user/Blog/Comment';

// Mock data for a single blog post
const blogPost = {
    id: 1,
    title: "Introduction to React Hooks",
    content: `
    React Hooks are a powerful feature introduced in React 16.8. They allow you to use state and other React features
    without writing a class. This means you can use React without classes.

    The most commonly used hooks are:

    1. useState: Allows you to add state to functional components.
    2. useEffect: Lets you perform side effects in function components.
    3. useContext: Accepts a context object and returns the current context value.

    In this post, we'll dive deep into how these hooks work and when to use them in your React applications.
  `,
    author: {
        name: "Jane Doe",
        avatar: teacher,
        bio: "Senior React Developer with 5+ years of experience. Passionate about creating efficient and scalable web applications."
    },
    publishDate: "2023-05-15",
    course: "Advanced React",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Web Development"],
    image: react
}

export default function BlogPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container flex flex-col sm:mt-16 mt-10 mx-auto py-12"
        >
            <Card className="sm:max-w-4xl w-full mx-auto dark:text-white text-black overflow-hidden">
                <div className="relative h-[400px]  w-full">
                    <img className='w-full h-full object-cover'
                        src={blogPost.image}
                        alt={blogPost.title}
                    />
                </div>
                <CardHeader>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <CardTitle className="text-3xl dark:text-white text-black font-bold mb-4">{blogPost.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                                <FaCalendar className="mr-2" />
                                {blogPost.publishDate}
                            </div>
                            <div className="flex items-center">
                                <FaBook className="mr-2" />
                                {blogPost.course}
                            </div>
                            <div className="flex items-center">
                                <FaClock className="mr-2" />
                                {blogPost.readTime}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blogPost.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                    </motion.div>
                </CardHeader>
                <CardContent>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <p className="text-lg dark:text-white text-black leading-relaxed whitespace-pre-line">{blogPost.content}</p>
                    </motion.div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-center border-t pt-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex items-center space-x-4 mb-4 sm:mb-0"
                    >
                        <Avatar className="h-16 w-16 dark:text-white text-black">
                            <AvatarImage src={blogPost.author.avatar} alt={blogPost.author.name} />
                            <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold dark:text-white text-black">{blogPost.author.name}</h3>
                            <p className="text-sm text-muted-foreground dark:text-white text-black">{blogPost.author.bio}</p>
                        </div>
                    </motion.div>
                </CardFooter>
            <div className='px-5'>
            <CommentSection/>
            </div>
            </Card>
         
        </motion.div>
    )
}