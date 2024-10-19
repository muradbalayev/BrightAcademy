import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
import teacher1 from '../../assets/images/teacher1.webp';
import teacher2 from '../../assets/images/teacher2.webp';
import teacher3 from '../../assets/images/teacher3.webp';
import teacher4 from '../../assets/images/teacher4.webp';

const instructors = [
  {
    id: 1,
    name: 'Səbinə Məhərrəmova',
    title: 'Alman dili təlimçisi',
    description: 'Goethe sertifikatı və TestDaF hazırlığı üzrə mütəxəssis.',
    image: teacher1,
    fullBio: 'Mən, Səbinə Məhərrəmova Elman qızı 2002-ci ildə Moskva şəhərində anadan olmuşam. 2009-cu ildə Bakı şəhəri, 192 saylı tam orta məktəbə daxil olmuşam və 2020-ci ildə həmin məktəbi bitirmişəm. 2020-ci ildə Azərbaycan Dillər Universitetinin Alman dili fakultəsinə daxil olmuşam və 2024-cü ildə universiteti bitirmişəm. Universitetdə təhsil aldığım müddətdə Alman dili üzrə müəllimə kimi çalışmışam. Bəzi kurslarda isə müəyyən səviyyələr üzrə dərslər keçmişəm. Hal-hazırda isə “ Bright Academy” kursunda Alman dili müəlliməsi kimi çalışıram. Həmçinin onlayn dərslər keçirəm.',
    education: 'Azərbaycan Dillər Universiteti, Alman Dili və Ədəbiyyatı üzrə bakalavr',
    certifications: ['Goethe Sertifikatı', 'TestDaF Hazırlığı Təlimçisi', 'Alman Dili Müəllimliyi Sertifikatı'],
    teachingPhilosophy: 'Hər bir tələbənin öyrənmə tərzinin fərqli olduğuna inanıram. Mənim tədris yanaşmam tələbələrin fərdi ehtiyaclarına uyğunlaşdırılmış, tətbiqi və interaktiv təlim metodlarına əsaslanır.',
    courses: ['Goethe Hazırlığı', 'TestDaF Hazırlığı', 'Alman Dili (Başlanğıc Səviyyə)', 'İş Alman Dili'],
    achievements: [ 'Tələbələri TestDaF imtahanında yüksək bal toplayıb'],
    contactInfo: {
      email: 'sabina.meharremova@brightacademy.az',
      phone: '+994 50 123 45 67'
    }
  },
  {
    id: 2,
    name: 'Elvira Ocaxquliyeva',
    title: 'Rus dili təlimçisi',
    description: 'Orta məktəb və universitet səviyyəsində Rus dili üzrə ixtisaslaşıb.',
    image: teacher2,
    fullBio: 'Elvira Ocaxquliyeva, 18 mart 2002-ci il doğulmuşdur. Pedaqoji universiteti bitirərək rus dili müəllimi ixtisasını əldə etmişdir. Hazırda magistratura təhsilini davam etdirərək peşə biliklərini daha da artırır. Dörd ildən artıqdır ki, rus dili müəllimi kimi fəaliyyət göstərir və tələbələrinə dil öyrətməkdə müasir metodlardan istifadə edir. Elvira, tələbələrin rus dilini sürətlə mənimsəmələrini təmin etmək üçün xüsusi yanaşmalar tətbiq edir və onlarla səmimi əlaqələr qurmağa çalışır. Dil öyrətmək ona yalnız peşə deyil, həm də bir sevgi olaraq görünür.',
    education: 'Azərbaycan Dillər Universiteti, Rus Dili və Ədəbiyyatı üzrə bakalavr',
    certifications: ['Rus Dili Müəllimliyi Sertifikatı', 'İELTS Hazırlığı Sertifikatı'],
    teachingPhilosophy: 'Dilin əsas məqsədi ünsiyyətdir və mən dərslərimdə tələbələrə praktiki danışıq bacarıqlarını artırmağı öyrətməyə çalışıram. Mənim məqsədim tələbələrimə dilə sevgi aşılamaq və onları inamlı danışanlara çevirməkdir.',
    courses: ['Rus Dili (Başlanğıc)', 'Rus Dili (Orta)', 'Rus Dili (Əla Səviyyə)', 'İELTS Hazırlığı (Rus dili)'],
    achievements: [ 'Tələbələri Rus Dili üzrə beynəlxalq sertifikat imtahanlarında yüksək bal toplayıb'],
    contactInfo: {
      email: 'elvira.ocaxquliyeva@brightacademy.az',
      phone: '+994 50 123 45 67'
    }
  },
  {
    id: 3,
    name: 'Fidan Əliyeva',
    title: 'Alman dili təlimçisi',
    description: 'Goethe sertifikatı və TestDaF hazırlığı üzrə mütəxəssis.',
    image: teacher3,
    fullBio: 'Fidan Əliyeva Tahir qızı 1995ci il avqustun 21də Baklda anadan olmuşdur. 2001-2012ci illərdə Bakı şəhəri, Yasamal rayonu 13 nömrəli məktəbə getmişdir. 20012-2016cı illərdə Bakı Slavyan Univetsitetinin Filologiya fakültəsi, Alman dili üzrə Dil və Ədəbiyyat müəllimliyi ixtisasını oxumuşdur. 2018-ci ildə 1 il Freiburg akademy-də alman dilini tədris etmişdir. Daha sonra fərdi şəkildə çalışmışdır. 2023-cü ilin fevral ayından bugünə kimi Bright akademy-də alman dilinin tədrisi ilə məşğuldur.',
    education: 'Azərbaycan Dillər Universiteti, Alman Dili və Ədəbiyyatı üzrə bakalavr',
    certifications: ['Goethe Sertifikatı', 'TestDaF Hazırlığı Təlimçisi', 'Alman Dili Müəllimliyi Sertifikatı'],
    teachingPhilosophy: 'Hər bir tələbənin öyrənmə tərzinin fərqli olduğuna inanıram. Mənim tədris yanaşmam tələbələrin fərdi ehtiyaclarına uyğunlaşdırılmış, tətbiqi və interaktiv təlim metodlarına əsaslanır.',
    courses: ['Goethe Hazırlığı', 'TestDaF Hazırlığı', 'Alman Dili (Başlanğıc Səviyyə)', 'İş Alman Dili'],
    achievements: [ 'Tələbələri TestDaF imtahanında yüksək bal toplayıb'],
    contactInfo: {
      email: 'fidan.aliyeva@brightacademy.az',
      phone: '+994 50 123 45 67'
    }
  },
  {
    id: 4,
    name: 'Səbinə Hümbətova',
    title: 'İngilis dili təlimçisi',
    description: 'Akademik və biznes məqsədləri üçün ingilis dili tədrisində ixtisaslaşır.',
    image: teacher4,
    fullBio: 'Azərbaycan Dillər Universitetinin bakalavr məzunu, Xarici-dilin tədrisi metodikası və metodologiyası üzrə magistr dərəcəsi almış,TESOL və TEFL (Digər dillərdə danışanlara ingilis-dilinin öyrədilməsi və ingilis-dilinin xarici dil kimi öyrədilməsi) sertifikatılı müəllimimiz Səbinə Hümbətova 3 illik iş təcrübəsinə sahibdir.',
    education: 'Bakı Dövlət Universiteti, İngilis dili və Ədəbiyyatı üzrə bakalavr',
    certifications: ['TESOL (Xarici Dillər üzrə İngilis Dili Tədrisi)', 'Cambridge English Level 5 Sertifikatı'],
    teachingPhilosophy: 'Mən hər bir tələbənin fərqli öyrənmə üslubu olduğuna inanıram. Dərslərimi tələbələrin ehtiyaclarına uyğunlaşdırmağa və onların ingilis dilini real həyatda istifadə etmələrinə imkan yaradan bir mühit yaratmağa çalışıram.',
    courses: ['Biznes İngilis Dili', 'IELTS Hazırlığı', 'Akademik İngilis Dili'],
    achievements: ['100-dən çox tələbəni IELTS imtahanında 7+ bal əldə etməyə hazırlayıb', '2021-ci ildə BrightAcademy tərəfindən "Ən Yaxşı İngilis Dili Müəllimi" mükafatına layiq görülüb'],
    contactInfo: {
      email: 'sabina.humbatova@brightacademy.az',
      phone: '+994 50 321 54 76'
    }
  }
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
      className="min-h-screen  mt-10  py-12 px-4 sm:px-6 lg:px-8"
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
            <h6 className="text-gray-900 sm:text-xl text-lg dark:text-white font-bold mt-2">Haqqında</h6>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300 mb-4">
              {instructor.fullBio}
            </Typography>

            <h6 className="text-gray-900 sm:text-xl text-lg dark:text-white font-semibold mt-2">Təhsil</h6>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300 mb-4">
              {instructor.education}
            </Typography>

            <h6 className="text-gray-900 sm:text-xl text-lg dark:text-white font-semibold mt-2">Sertifikatlar</h6>
            <ul className="list-disc pl-5 mb-4">
              {instructor.certifications.map((cert, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">{cert}</li>
              ))}
            </ul>

            <h6 className="text-gray-900 sm:text-xl text-lg dark:text-white font-semibold mt-2">Tədris Fəlsəfəsi</h6>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300 mb-4">
              {instructor.teachingPhilosophy}
            </Typography>

            <h6 className="text-gray-900 sm:text-xl text-lg dark:text-white font-semibold mt-2">Tədris Etdiyi Kurslar</h6>
            <ul className="list-disc pl-5 mb-4">
              {instructor.courses.map((course, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">{course}</li>
              ))}
            </ul>

            <h6 className="text-gray-900 sm:text-xl text-lg dark:text-white font-semibold mt-2">Nailiyyətlər</h6>
            <ul className="list-disc pl-5 mb-4">
              {instructor.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">{achievement}</li>
              ))}
            </ul>

            <h6 className="text-gray-900 sm:text-xl text-lg dark:text-white font-semibold mt-2">Əlaqə Məlumatları</h6>
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