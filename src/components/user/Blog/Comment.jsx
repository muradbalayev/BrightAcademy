import { useState } from "react";
import { Avatar, TextField } from '@mui/material';
import teacher from '../../../assets/images/teacher.webp';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function CommentSection() {

    const comments = [
        { id: 1, author: "Murad Balayev", avatar: teacher, text: "This article was really insightful! I can't wait to visit these places myself." },
        { id: 2, author: "Jane Smith", avatar: teacher, text: "I love nature, and this blog made me want to travel more. Great job!" },
        { id: 3, author: "John Doe", avatar: teacher, text: "Beautifully written. Nature is truly breathtaking!" },
        { id: 4, author: "Alice Johnson", avatar: teacher, text: "Thanks for the information! I'm adding these places to my travel list." },
    ];

    const [visibleComments, setVisibleComments] = useState(2);

    const handleLoadMore = () => {
        setVisibleComments((prev) => prev + 2); // Load 2 more comments at a time
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 mb-6 flex flex-col w-full gap-4 mx-auto"
        >
            {/* Comments Section */}
            <h2 className="text-2xl font-semibold mb-4 dark:text-white text-black">Comments</h2>
            <div className='flex flex-col gap-3 items-start'>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    placeholder="Add your comment..."
                    className="mb-4 bg-white dark:bg-gray-700 dark:text-gray-200 text-black rounded-lg"
                    InputProps={{
                        style: {
                            color: 'inherit',
                            backgroundColor: 'inherit'
                        }
                    }}
                />
                <Button className="bg-primary dark:bg-blue-600 text-white dark:hover:bg-blue-700">Submit Comment</Button>
            </div>
            <div className='comments mt-5'>
                {/* Existing Comments */}
                {comments.slice(0, visibleComments).map((comment) => (
                    <div
                        key={comment.id}
                        className="bg-gray-200 dark:bg-gray-800 dark:text-white flex gap-2 items-center border p-4 rounded-lg mb-4"
                    >
                        <Avatar src={comment.avatar} alt={comment.author} />
                        <div>
                            <p className="font-bold text-black dark:text-gray-100">{comment.author}:</p>
                            <p className="dark:text-gray-300 text-black">{comment.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleComments < comments.length && (
                <div className="flex justify-center mt-4">
                    <Button onClick={handleLoadMore}
                    >
                        Load More...
                    </Button>
                </div>
            )}
        </motion.div>
    )
}
