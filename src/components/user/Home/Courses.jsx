import { motion } from 'framer-motion';
import courseİmg from '../../../assets/images/course.jpg';
import { Link } from 'react-router-dom';

export default function Courses() {

  const courses = [
    {
      id: 1,
      title: 'İngilis Dili',
      description: 'IELTS və TOEFL imtahanlarına hazırlıq üçün oxuma, yazma, dinləmə və danışıq dərsləri. Testlər və şəxsi rəy ilə əhatələnmişdir.',
      image: courseİmg,
      duration: '6 ay',
      level: 'Orta səviyyədən Yüksək səviyyəyə',
      instructor: 'John Doe',
      price: "150",
      schedule: 'B.e və Çərşənbə, 18:00-20:00',
      startDate: '2024-12-01',
    },
    {
      id: 2,
      title: 'Riyaziyyat',
      description: 'Orta məktəb və universitet səviyyəsi üzrə riyaziyyat, cəbr, hesablama və statistika mövzularını əhatə edir. Rəqabətli imtahanlara hazırlıq və problem həll etmə bacarıqlarını artırmaq üçün ideal.',
      image: courseİmg,
      duration: '4 ay',
      level: 'Bütün Səviyyələr',
      instructor: 'Jane Smith',
      price: "150",
      schedule: 'Çərşənbə axşamı və Cümə axşamı, 17:00-19:00',
      startDate: '2024-12-01',
    },
    {
      id: 3,
      title: 'Proqramlaşdırma',
      description: 'Veb və mobil tətbiqetmə inkişafı üçün HTML, CSS, JavaScript və React üzərində praktiki layihələrlə dolu dərslər.',
      image: courseİmg,
      duration: '8 ay',
      level: 'Başlanğıcdan Yüksək səviyyəyə',
      instructor: 'Michael Johnson',
      price: "150",
      schedule: 'Şənbə, 10:00-13:00',
      startDate: '2024-12-01',
    },
    {
      id: 4,
      title: 'Biznes İdarəçiliyi',
      description: 'Marketinq, maliyyə və əməliyyat idarəçiliyi üzrə təməl biliklər. Sahibkarlar və peşəkar bacarıqlarını artırmaq istəyənlər üçün nəzərdə tutulub.',
      image: courseİmg,
      duration: '5 ay',
      level: 'Başlanğıcdan Orta səviyyəyə',
      instructor: 'Sarah Williams',
      price: "150",
      schedule: 'Cümə, 18:00-21:00',
      startDate: '2024-12-01',
    },
  ];

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
    <section id='courses' className="py-20 ">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
              variants={itemVariants}
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

                {/* Additional Course Details */}
                <p className="text-gray-800 dark:text-gray-400"><strong>Müddət:</strong> {course.duration}</p>
                <p className="text-gray-800 dark:text-gray-400"><strong>Səviyyə:</strong> {course.level}</p>
                <p className="text-gray-800 dark:text-gray-400"><strong>Qiymət:</strong> {course.price} ₼</p>
                <p className="text-gray-800 dark:text-gray-400"><strong>Müəllim:</strong> {course.instructor}</p>
                <p className="text-gray-800 dark:text-gray-400"><strong>Başlama tarixi:</strong> {course.startDate}</p>

                <Link to={`/courses/${course.id}`}>
                <motion.button
                  className="mt-4 px-6 py-2 bg-black text-white dark:text-black dark:bg-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ətraflı
                </motion.button>
                  </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
