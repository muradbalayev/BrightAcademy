import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';

import teacher from '../../../assets/images/teacher.webp';

const instructors = [
    {
        name: "John Doe",
        title: "English Instructor",
        description: "Expert in IELTS and TOEFL preparation.",
        image: teacher,
    },
    {
        name: "Jane Smith",
        title: "Math Instructor",
        description: "Specializes in high school and university-level mathematics.",
        image: teacher,
    },
    {
        name: "Alice Johnson",
        title: "Programming Instructor",
        description: "Experienced in web and mobile application development.",
        image: teacher,
    },
    {
        name: "Michael Brown",
        title: "Business Management Instructor",
        description: "Teaches marketing and finance fundamentals.",
        image: teacher,
    },
    {
        name: "Sarah Connor",
        title: "History Instructor",
        description: "Passionate about world history and culture.",
        image: teacher,
    },
];

const CarouselDemo = () => {
    return (
        <div className="md:py-20 sm:py-12 py-8 ">
            <motion.h2
                className="text-4xl font-bold text-center  text-gray-800 dark:text-white mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Müəllimlərimiz 1
            </motion.h2>
            <Carousel opts={{ align: "start", loop: true }} className="relative w-full max-w-7xl md:px-0 px-14 mx-auto">
                <CarouselContent className="-ml-1">
                    {instructors.map((instructor, index) => (
                        <CarouselItem key={index} className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square flex-col justify-center items-center p-6 text-center">
                                        <img
                                            src={instructor.image}
                                            alt={instructor.name}
                                            className="w-60 h-60 rounded-full mb-4 object-cover"
                                        />
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{instructor.name}</h3>
                                        <p className="text-md text-gray-600 dark:text-gray-300">{instructor.title}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{instructor.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute dark:text-white left-4 top-1/2 transform -translate-y-1/2 z-10" />
                <CarouselNext className="absolute dark:text-white right-4 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
        </div>
    );
};

export default CarouselDemo;
