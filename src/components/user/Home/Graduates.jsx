import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import student2 from '../../../assets/images/student2.jpg'
import { Button } from '@/components/ui/button';

// Sample graduates data
const graduates = [
    {
      name: "Murad  Balazada",
      specialty: "Front-end Developer",
      company: "Pixel Agency",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Kamal İsmayılov",
      specialty: "Software Engineer",
      company: "Tech Corp",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Ayan Quliyeva",
      specialty: "Digital Marketing Specialist",
      company: "Marketing Pro",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Camal Abbasov",
      specialty: "Data Analyst",
      company: "Data Insights",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Ismayıl Cəfərli",
      specialty: "Cybersecurity Expert",
      company: "SecureNet",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Abbas Mustafayev",
      specialty: "Cloud Engineer",
      company: "CloudMasters",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Aynura Məmmədova",
      specialty: "Project Manager",
      company: "Agile Solutions",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Həsən Həsənov",
      specialty: "Social Media Strategist",
      company: "Influence Media",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Samirə Əkbərova",
      specialty: "UI Developer",
      company: "CodeBase",
      avatar: student2, // Placeholder image URL
    },
    {
      name: "Sevda Orucova",
      specialty: "Business Analyst",
      company: "BizTech",
      avatar: student2, // Placeholder image URL
    },
    {
        name: "Məmməd Məmmədov",
        specialty: "Social Media Strategist",
        company: "Influence Media",
        avatar: student2, // Placeholder image URL
      },
      {
        name: "Ali Aghayev",
        specialty: "Social Media Strategist",
        company: "Influence Media",
        avatar: student2, // Placeholder image URL
      },
  ];
  

export default function Graduates() {
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
    <section id='graduates' className="py-20 ">
      <div className="container flex flex-col mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Məzunlarımız
        </motion.h2>

        {/* Grid Container */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-10 sm:gap-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {graduates.map((graduate, index) => (
            <motion.div
              key={index}
              className="relative group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Avatar */}
              <div className="flex justify-center pt-4">
                <Avatar
                  alt={graduate.name}
                  src={graduate.avatar}
                  sx={{ width: 100, height: 100 }}
                  className="rounded-full"
                />
              </div>

              {/* Content */}
              <div className="sm:p-6 p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {graduate.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {graduate.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      <Button className="mx-auto mt-10">Daha çox...</Button>
      </div>
    </section>
  );
}
