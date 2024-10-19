import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
import teacher from '../../assets/images/teacher.webp';

const instructors = [
  {
    id: 1,
    name: 'John Doe',
    title: 'İngilis Dili Müəllimi',
    description: 'IELTS və TOEFL hazırlığı üzrə mütəxəssis.',
    image: teacher,
    fullBio: 'John Doe 10 ildən çox təcrübəyə malik peşəkar İngilis dili müəllimidir. O, IELTS və TOEFL imtahanlarına hazırlıq üzrə ixtisaslaşıb və yüzlərlə tələbəyə hədəf ballarını əldə etməkdə kömək edib. John-un dərsləri interaktiv və əyləncəlidir, tələbələrin dil bacarıqlarını praktiki şəkildə inkişaf etdirməsinə kömək edir.',
    education: 'Bakı Dövlət Universiteti, İngilis dili və Ədəbiyyatı üzrə bakalavr',
    certifications: ['CELTA', 'DELTA', 'IELTS Trainer Sertifikatı'],
    teachingPhilosophy: 'Hər bir tələbənin unikal öyrənmə üslubuna malik olduğuna inanıram. Mənim yanaşmam fərdi ehtiyaclara uyğunlaşdırılmış və real dünya tətbiqinə yönəlmiş təhsil verməkdir.',
    courses: ['IELTS Hazırlığı', 'Akademik İngilis Dili', 'İş İngilis Dili'],
    achievements: ['2022-ci ildə "İlin Ən Yaxşı Dil Müəllimi" mükafatı', '100-dən çox tələbəni IELTS-də 7+ bal almağa hazırlayıb'],
    contactInfo: {
      email: 'john.doe@brightacademy.az',
      phone: '+994 50 123 45 67'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Riyaziyyat Müəllimi',
    description: 'Orta məktəb və universitet səviyyəli riyaziyyat üzrə ixtisaslaşıb.',
    image: teacher,
    fullBio: 'Jane Smith 15 illik təcrübəyə malik riyaziyyat müəllimidir. O, mürəkkəb riyazi konsepsiyaları sadə və anlaşılan şəkildə izah etmək qabiliyyəti ilə tanınır. Jane-in tələbələri davamlı olaraq yüksək nəticələr göstərir və riyaziyyat olimpiadalarında uğurlar qazanırlar.',
    education: 'Azərbaycan Dövlət Pedaqoji Universiteti, Riyaziyyat üzrə magistr',
    certifications: ['Yüksək Səviyyəli Riyaziyyat Tədrisi Sertifikatı', 'Olimpiada Hazırlığı Təlimçisi'],
    teachingPhilosophy: 'Riyaziyyatı real həyat problemləri ilə əlaqələndirərək öyrətməyə çalışıram. Mənim məqsədim tələbələrə təkcə düsturları deyil, analitik düşünmə bacarıqlarını da aşılamaqdır.',
    courses: ['Orta Məktəb Riyaziyyatı', 'Olimpiada Hazırlığı', 'Ali Riyaziyyat'],
    achievements: ['Tələbələri Beynəlxalq Riyaziyyat Olimpiadasında 3 qızıl medal qazanıb', '2021-ci ildə "Ən İnnovativ Riyaziyyat Tədrisi" mükafatı'],
    contactInfo: {
      email: 'jane.smith@brightacademy.az',
      phone: '+994 50 987 65 43'
    }
  },
  {
    id: 3,
    name: 'Alice Johnson',
    title: 'Proqramlaşdırma Müəllimi',
    description: 'Web və mobil tətbiq inkişafı üzrə təcrübəli mütəxəssis.',
    image: teacher,
    fullBio: 'Alice Johnson 8 illik sənaye təcrübəsinə malik peşəkar proqramçı və müəllimdir. O, bir çox uğurlu startapların texniki həmtəsisçisi olub və indi öz bilik və təcrübəsini gələcək proqramçılara ötürür. Alice-in dərsləri praktiki layihələrə əsaslanır və tələbələrə real dünya problemlərini həll etmək üçün kod yazmağı öyrədir.',
    education: 'MIT, Kompüter Elmləri üzrə magistr',
    certifications: ['AWS Certified Developer', 'Google Certified Professional Cloud Developer', 'Microsoft Certified: Azure Developer Associate'],
    teachingPhilosophy: 'İnanıram ki, ən yaxşı öyrənmə metodu praktikadır. Dərslərimdə tələbələr nəzəriyyəni öyrənməklə yanaşı, real layihələr üzərində işləyirlər. Bu, onların nəzəri bilikləri praktikada tətbiq etmələrinə və portfolio yaratmalarına imkan verir.',
    courses: ['Full Stack Web Development', 'Mobile App Development with React Native', 'Data Structures and Algorithms'],
    achievements: ['500-dən çox tələbəni texnologiya şirkətlərində işə düzəldib', '2023-cü ildə "Ən Yaxşı Coding Bootcamp Təlimçisi" seçilib'],
    contactInfo: {
      email: 'alice.johnson@brightacademy.az',
      phone: '+994 50 765 43 21'
    }
  },
  {
    id: 4,
    name: 'Michael Brown',
    title: 'Biznes İdarəetmə Müəllimi',
    description: 'Marketinq və maliyyə əsaslarını tədris edir.',
    image: teacher,
    fullBio: 'Michael Brown 20 illik biznes təcrübəsinə malik peşəkar menecerdir. O, bir neçə uğurlu şirkətin qurucusu və CEO-su olub. İndi isə öz təcrübəsini gələcək biznes liderləri ilə bölüşür. Michael-ın dərsləri real biznes case study-lərinə əsaslanır və tələbələrə praktiki biznes bacarıqları qazandırır.',
    education: 'Harvard Business School, MBA',
    certifications: ['Project Management Professional (PMP)', 'Certified Management Accountant (CMA)'],
    teachingPhilosophy: 'Biznes təhsilinin real təcrübə ilə birləşdirilməsinin vacibliyinə inanıram. Dərslərimdə tələbələr nəzəri bilikləri real biznes ssenarilərində tətbiq edirlər. Bu, onların analitik düşünmə və qərar qəbul etmə bacarıqlarını inkişaf etdirir.',
    courses: ['Strateji Menecment', 'Maliyyə İdarəetməsi', 'Marketinq Strategiyaları'],
    achievements: ['Fortune 500 şirkətlərində 100-dən çox top menecerə məsləhət verib', '2020-ci ildə "İlin Biznes Məsləhətçisi" seçilib'],
    contactInfo: {
      email: 'michael.brown@brightacademy.az',
      phone: '+994 50 321 54 76'
    }
  },
];

export default function InstructorPage() {
  const { instructorId } = useParams();
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    const selectedInstructor = instructors.find(i => i.id === parseInt(instructorId));
    setInstructor(selectedInstructor);
    window.scrollTo(0, 0);
  }, [instructorId]);

  if (!instructor) {
    return <div className="text-center text-2xl mt-20 dark:text-white">Yüklənir...</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 mt-10 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <Avatar
              alt={instructor.name}
              src={instructor.image}
              sx={{ width: 200, height: 200, mb: 2 }}
            />
            <h4 className="text-gray-900 text-3xl dark:text-white font-bold">
              {instructor.name}
            </h4>
            <h6 className="text-gray-600 text-lg dark:text-gray-300">
              {instructor.title}
            </h6>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h6 className="text-gray-900 text-xl dark:text-white font-bold mt-2">Haqqında</h6>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300 mb-4">
              {instructor.fullBio}
            </Typography>

            <h6 className="text-gray-900 text-xl dark:text-white font-semibold mt-2">Təhsil</h6>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300 mb-4">
              {instructor.education}
            </Typography>

            <h6 className="text-gray-900 text-xl dark:text-white font-semibold mt-2">Sertifikatlar</h6>
            <ul className="list-disc pl-5 mb-4">
              {instructor.certifications.map((cert, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">{cert}</li>
              ))}
            </ul>

            <h6 className="text-gray-900 text-xl dark:text-white font-semibold mt-2">Tədris Fəlsəfəsi</h6>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300 mb-4">
              {instructor.teachingPhilosophy}
            </Typography>

            <h6 className="text-gray-900 text-xl dark:text-white font-semibold mt-2">Tədris Etdiyi Kurslar</h6>
            <ul className="list-disc pl-5 mb-4">
              {instructor.courses.map((course, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">{course}</li>
              ))}
            </ul>

            <h6 className="text-gray-900 text-xl dark:text-white font-semibold mt-2">Nailiyyətlər</h6>
            <ul className="list-disc pl-5 mb-4">
              {instructor.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">{achievement}</li>
              ))}
            </ul>

            <h6 className="text-gray-900 text-xl dark:text-white font-semibold mt-2">Əlaqə Məlumatları</h6>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300">
              Email: {instructor.contactInfo.email}
            </Typography>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300">
              Telefon: {instructor.contactInfo.phone}
            </Typography>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}