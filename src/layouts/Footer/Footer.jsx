import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.footer
      className="mx-auto w-full dark:bg-gray-900 bg-[#f4f6fa] pt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // trigger animation once when 20% of the element is visible
    >
      <div className="container bg-white dark:bg-gray-900  rounded-lg shadow-lg  mx-auto py-10 px-6 lg:px-8">
        {/* Top Section with Contact Details */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left"
          variants={containerVariants}
        >
          {/* Phone Section */}
          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <FiPhone size={24} className="mx-auto md:mx-0 text-gray-600 dark:text-gray-400 mb-2" />
            <p className="text-gray-600 dark:text-gray-400">Əlaqə telefon</p>
            <p className="text-black dark:text-white font-bold">+994 99 123 3254</p>
          </motion.div>

          {/* WhatsApp Section */}
          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <FiPhone size={24} className="mx-auto md:mx-0 text-gray-600 dark:text-gray-400 mb-2" />
            <p className="text-gray-600 dark:text-gray-400">Mobil/Whatsapp</p>
            <p className="text-black dark:text-white font-bold">+994 99 999 9999</p>
          </motion.div>

          {/* Address Section */}
          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <FiMapPin size={24} className="mx-auto md:mx-0 text-gray-600 dark:text-gray-400 mb-2" />
            <p className="text-gray-600 dark:text-gray-400">Ünvan</p>
            <p className="text-black dark:text-white font-bold"> Nərimanov prospekti</p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="my-8 border-gray-300 dark:border-gray-700"
          variants={itemVariants}
        />

        {/* Footer Links Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {/* Akademiya Links */}
          <motion.div className="text-left" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Akademiya</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Təqaüd proqramları</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Karyera Mərkəzi</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Təhsil modeli</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Akademik partnyorlar</a></li>
            </ul>
          </motion.div>

          {/* Tədris Sahələri Links */}
          <motion.div className="text-left" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Tədris sahələri</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Proqramlaşdırma</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Dizayn</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Kiber Təhlükəsizlik</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Digital Marketing</a></li>
            </ul>
          </motion.div>

          {/* Korporativ Links */}
          <motion.div className="text-left" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Korporativ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Tədbirlər</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Təqaüd proqramları</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Bloq</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Korporativ tədris sahələri</a></li>
            </ul>
          </motion.div>

          {/* Digər Links */}
          <motion.div className="text-left" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Digər</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Akademiya</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Məzunlarımız</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Akademik partnyorlar</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Əlaqə</a></li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="my-8 border-gray-300 dark:border-gray-700"
          variants={itemVariants}
        />

        {/* Bottom Section: Social Media and Copyright */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center"
          variants={containerVariants}
        >
          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-6 text-gray-600 dark:text-gray-400 mb-6 lg:mb-0"
            variants={containerVariants}
          >
            <motion.a href="#" className="hover:text-black dark:hover:text-white transition-colors" variants={itemVariants}>
              <FaFacebookF size={24} />
            </motion.a>
            <motion.a href="#" className="hover:text-black dark:hover:text-white transition-colors" variants={itemVariants}>
              <FaInstagram size={24} />
            </motion.a>
            <motion.a href="#" className="hover:text-black dark:hover:text-white transition-colors" variants={itemVariants}>
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a href="#" className="hover:text-black dark:hover:text-white transition-colors" variants={itemVariants}>
              <FaTiktok size={24} />
            </motion.a>
            <motion.a href="#" className="hover:text-black dark:hover:text-white transition-colors" variants={itemVariants}>
              <FaYoutube size={24} />
            </motion.a>
          </motion.div>

          {/* Copyright Text */}
          <motion.p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4 lg:mt-0" variants={itemVariants}>
            &copy; 2024 BrightAcademy. Bütün hüquqlar qorunur.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
