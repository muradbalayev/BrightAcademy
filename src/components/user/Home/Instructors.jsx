import { motion } from 'framer-motion'; // Import motion for animation
import { Avatar, Typography } from '@mui/material';
import teacher1 from '../../../assets/images/teacher1.webp';
import teacher2 from '../../../assets/images/teacher2.webp';
import teacher3 from '../../../assets/images/teacher3.webp';
import teacher4 from '../../../assets/images/teacher4.webp';

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const instructors = [
  { id: 1,
    name: 'Səbinə Məhərrəmova',
    title: 'Alman dili təlimçisi',
    // description: 'Expert in IELTS and TOEFL preparation.',
    image: teacher1,
  },
  { id: 2,
    name: 'Elvira Ocaxquliyeva',
    title: 'Rus dili təlimçisi',
    // description: 'Specializes in high school and university-level mathematics.',
    image: teacher2,
  },
  { id: 3,
    name: 'Fidan Əliyeva',
    title: 'Alman dili təlimçisi',
    // description: 'Experienced in web and mobile application development.',
    image: teacher3,
  },
  { id: 4,
    name: 'Səbinə Hümbətova',
    title: 'İngilis dili təlimçisi',
    // description: 'Teaches marketing and finance fundamentals.',
    image: teacher4,
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
    viewport: { once: true },
  };

  return (
    <section className="py-20 ">
      <motion.h2
        className="text-4xl font-bold text-center  text-gray-800 dark:text-white mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Müəllim Heyətimiz
      </motion.h2>


      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger animation when scrolled into view
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
            {/* <Typography variant="body2" sx={{ mt: 1, mb: 3, textAlign: 'center' }} className="text-gray-600 dark:text-gray-300">
              {instructor.description}
            </Typography> */}
            <Link className='mt-3' to={`/instructor/${instructor.id}`}>
            <Button className="mt-auto">
              Daha çox
            </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
