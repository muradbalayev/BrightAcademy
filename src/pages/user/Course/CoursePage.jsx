import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import courseImg from '../../../assets/images/course.jpg';

const courses = [
    {
      id: 1,
      title: 'İngilis Dili',
      description: 'IELTS və TOEFL imtahanlarına hazırlıq üçün oxuma, yazma, dinləmə və danışıq dərsləri. Testlər və şəxsi rəy ilə əhatələnmişdir.',
      image: courseImg,
      duration: '6 ay',
      level: 'Orta səviyyədən Yüksək səviyyəyə',
      instructor: 'John Doe',
      price: "150",
      schedule: 'B.e və Çərşənbə, 18:00-20:00',
      startDate: '2024-12-01',
      syllabus: [
        'IELTS və TOEFL Giriş',
        'Oxuma Anlama Strategiyaları',
        'Akademik Yazı Bacarıqları',
        'Dinləmə Texnikaları',
        'Danışıq Təcrübəsi və Qiymətləndirmə',
        'Sınaq İmtahanları və Rəy Seansları'
      ]
    },
    {
      id: 2,
      title: 'Riyaziyyat',
      description: 'Orta məktəb və universitet səviyyəsi üzrə riyaziyyat, cəbr, hesablama və statistika mövzularını əhatə edir. Rəqabətli imtahanlara hazırlıq və problem həll etmə bacarıqlarını artırmaq üçün ideal.',
      image: courseImg,
      duration: '4 ay',
      level: 'Bütün Səviyyələr',
      instructor: 'Jane Smith',
      price: "150",
      schedule: 'Çərşənbə axşamı və Cümə axşamı, 17:00-19:00',
      startDate: '2024-12-01',
      syllabus: [
        'Cəbr və Funksiyalar',
        'Həndəsə və Trigonometriya',
        'Hesablama: Diferensial və İntegrasiya',
        'Xətti Cəbr',
        'Ehtimal və Statistika',
        'Problem Həll Etmə Texnikaları'
      ]
    },
    {
      id: 3,
      title: 'Proqramlaşdırma',
      description: 'Veb və mobil tətbiqetmə inkişafı üçün HTML, CSS, JavaScript və React üzərində praktiki layihələrlə dolu dərslər.',
      image: courseImg,
      duration: '8 ay',
      level: 'Başlanğıcdan Yüksək səviyyəyə',
      instructor: 'Michael Johnson',
      price: "150",
      schedule: 'Şənbə, 10:00-13:00',
      startDate: '2024-12-01',
      syllabus: [
        'HTML və CSS Əsasları',
        'JavaScriptin Əsas və İrəli Mövzuları',
        'React.js Framework',
        'Backend Proqramlaşdırma Node.js ilə',
        'MongoDB ilə Verilənlər Bazası İdarəetməsi',
        'Tam Stak Layihə İnkişafı'
      ]
    },
    {
      id: 4,
      title: 'Biznes İdarəçiliyi',
      description: 'Marketinq, maliyyə və əməliyyat idarəçiliyi üzrə təməl biliklər. Sahibkarlar və peşəkar bacarıqlarını artırmaq istəyənlər üçün nəzərdə tutulub.',
      image: courseImg,
      duration: '5 ay',
      level: 'Başlanğıcdan Orta səviyyəyə',
      instructor: 'Sarah Williams',
      price: "150",
      schedule: 'Cümə, 18:00-21:00',
      startDate: '2024-12-01',
      syllabus: [
        'İdarəetmənin Prinsipləri',
        'Marketinq Strategiyaları',
        'Maliyyə İdarəçiliyi',
        'Əməliyyatların İdarə Edilməsi',
        'İnsan Resurslarının İdarə Edilməsi',
        'Biznes Etikası və Liderlik'
      ]
    },
  ];

export default function CoursePage() {
  const { courseId } = useParams();
  console.log(courseId)
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = courses.find(c => c.id === parseInt(courseId));
    setCourse(selectedCourse);
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return <div className="text-center text-2xl mt-20 dark:text-white">Loading...</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen mt-10 bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {course.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-600 dark:text-gray-300 mb-6"
          >
            {course.description}
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Kurs Detalları</h2>
              <p className="text-gray-600 dark:text-gray-300"><strong>Müddət:</strong> {course.duration}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Səviyyə:</strong> {course.level}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>MÜəllim:</strong> {course.instructor}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Qiymət & Vaxt</h2>
              <p className="text-gray-600 dark:text-gray-300"><strong>Schedule:</strong> {course.schedule}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Başlanğıc Tarixi:</strong> {course.startDate}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Qiymət:</strong> {course.price} ₼</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Sillabus</h2>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              {course.syllabus.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            <Link to={'/contact'}>
           İndi Qeydiyyatdan Keç!
            </Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}