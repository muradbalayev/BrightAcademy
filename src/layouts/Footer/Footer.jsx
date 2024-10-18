
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
      className="bg-gray-100 dark:bg-gray-900 py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // trigger animation once when 20% of the element is visible
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0"
          variants={containerVariants}
        >
          {/* Logo and Description */}
          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
              BrightAcademy
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Enhancing your skills and confidence, one course at a time.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex space-x-6 text-gray-600 dark:text-gray-400"
            variants={itemVariants}
          >
            <a href="/about" className="hover:text-black dark:hover:text-white transition-colors">
              About Us
            </a>
            <a href="/courses" className="hover:text-black dark:hover:text-white transition-colors">
              Courses
            </a>
            <a href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="my-8 border-gray-300 dark:border-gray-700"
          variants={itemVariants}
        />

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-6 text-gray-600 dark:text-gray-400 mb-6"
          variants={containerVariants}
        >
          <motion.a href="#" className="hover:text-black dark:hover:text-white transition-colors" variants={itemVariants}>
            <FaFacebookF size={24} />
          </motion.a>
          <motion.a href="#" className="hover:text-black dark:hover:text-white transition-colors" variants={itemVariants}>
            <FaInstagram size={24} />
          </motion.a>
          <motion.a href="#" className="hover:text-black dark:hover:text-white transition-colors" variants={itemVariants}>
            <FaTwitter size={24} />
          </motion.a>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="text-center text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          © 2024 BrightAcademy. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
