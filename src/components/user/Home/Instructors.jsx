import { motion } from 'framer-motion'; // Import motion for animation
import { Avatar, Typography } from '@mui/material';
import teacher from '../../../assets/images/teacher.webp';
import { Button } from '@/components/ui/button';

const instructors = [
  {
    name: 'John Doe',
    title: 'English Instructor',
    description: 'Expert in IELTS and TOEFL preparation.',
    image: teacher,
  },
  {
    name: 'Jane Smith',
    title: 'Math Instructor',
    description: 'Specializes in high school and university-level mathematics.',
    image: teacher,
  },
  {
    name: 'Alice Johnson',
    title: 'Programming Instructor',
    description: 'Experienced in web and mobile application development.',
    image: teacher,
  },
  {
    name: 'Michael Brown',
    title: 'Business Management Instructor',
    description: 'Teaches marketing and finance fundamentals.',
    image: teacher,
  },
];

export default function Instructors() {
  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 }, // Initial hidden state
    visible: {
      opacity: 1,
      scale: 1,
      y: 0, // Final visible state
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <motion.h2
        className="text-4xl font-bold text-center  text-gray-800 dark:text-white mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Müəllimlərimiz 2
      </motion.h2>


      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Trigger animation when scrolled into view
      >
        {instructors.map((instructor, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 py-10 flex flex-col items-center"
            variants={itemVariants} // Apply item variants for animation
          >
            <Avatar
              alt={instructor.name}
              src={instructor.image}
              sx={{ width: 200, height: 200, mb: 2 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }} className="text-gray-800 dark:text-white">
              {instructor.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" className="dark:text-gray-300">
              {instructor.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, mb: 3, textAlign: 'center' }} className="text-gray-600 dark:text-gray-300">
              {instructor.description}
            </Typography>
            <Button className="mt-auto">
              Daha çox
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
