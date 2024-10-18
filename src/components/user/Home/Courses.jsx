import { motion } from 'framer-motion';

const courses = [
  { 
    title: 'İngilis dili', 
    description: 'IELTS və TOEFL imtahanlarına hazırlıq', 
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg' 
  },
  { 
    title: 'Riyaziyyat', 
    description: 'Orta məktəb və universitet səviyyəsi', 
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg' 
  },
  { 
    title: 'Proqramlaşdırma', 
    description: 'Web və mobil tətbiq inkişafı', 
    image: 'https://images.pexels.com/photos/1181655/pexels-photo-1181655.jpeg' 
  },
  { 
    title: 'Biznes idarəçiliyi', 
    description: 'Marketinq və maliyyə əsasları', 
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg' 
  },
];

export default function Courses() {
  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kurslarımız
        </motion.h2>
        
        {/* Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <motion.img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                whileHover={{ scale: 1.1 }}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                <motion.button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ətraflı
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
