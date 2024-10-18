import { motion } from 'framer-motion';
import aboutImg from '../../../assets/images/about.png';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="md:w-1/2 mb-10 md:mb-0" variants={itemVariants}>
            <img
              src={aboutImg}
              alt="About Bright Academy"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div className="md:w-1/2 md:pl-10" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Haqqımızda</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Bright Academy, 2010-cu ildən bəri Azərbaycanda fəaliyyət göstərən qabaqcıl tədris mərkəzidir. Biz tələbələrimizə yüksək keyfiyyətli təhsil təklif edir və onların akademik və peşəkar inkişafına dəstək oluruq.
            </p>
            <ul className="space-y-4">
              {['Təcrübəli müəllimlər', 'Müasir tədris metodları', 'Kiçik qrup dərsləri', 'Fərdi yanaşma'].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-200"
                  variants={itemVariants}
                >
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}