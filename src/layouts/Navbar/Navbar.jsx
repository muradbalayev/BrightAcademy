import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BiSun } from "react-icons/bi";
import { motion } from 'framer-motion';
import {  Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import english from '../../assets/images/english.svg'
import german from '../../assets/images/german2.png'
import russian from '../../assets/images/russian.png'
import france from '../../assets/images/france.webp'

export default function Navbar() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/' && window.scrollY > 40) {
        setIsScrolled(true);
      } else if (location.pathname === '/') {
        setIsScrolled(false);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const isHomePage = location.pathname === '/';

  // Animation variants for menu slide-down (mobile only)
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <nav className={`fixed w-full z-20 top-0 left-0 ${isScrolled || !isHomePage ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'} dark:text-white text-gray-800`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">BrightAcademy</span>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={toggleTheme}
            className='rounded-full transition-all hover:scale-110'
            aria-label="Toggle dark mode"
          >
            {isDarkTheme ? <BiSun className="text-gray-900 dark:text-white" size={30} /> : <FaMoon className="text-gray-900 dark:text-white" size={27} />}
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-2"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`items-center py-2 justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden md:flex'}`}>
          <ul className="md:flex hidden p-4 md:p-0 mt-4 font-medium rounded-lg flex-row md:space-x-8 md:mt-0 md:border-0 dark:md:bg-transparent dark:bg-gray-900 md:bg-transparent bg-white">
            <li>
              <NavLink to="/" exact className="nav-link text-black dark:text-white" activeClassName="active">
                Ana Səhifə
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link text-black dark:text-white" activeClassName="active">
                Haqqımızda
              </NavLink>
            </li>
            <Menu setActive={setActive} >
            <MenuItem setActive={setActive} active={active} item="Kurslar">
                <div className="text-sm grid grid-cols-2 gap-3 lg:p-4 p-1">
                  <ProductItem
                    title="Ingilis Dili"
                    href="/courses/1"
                    src={english}
                    description="IELTS və TOEFL imtahanlarına hazırlıq üçün oxuma, yazma, dinləmə və danışıq dərsləri."
                  />
                  <ProductItem
                    title="Alman Dili"
                    href="/courses/3"
                    src={german}
                    description="Alman dilinin qrammatikasını öyrənərək dilin strukturunu düzgün mənimsəyin."
                  />
                  <ProductItem
                    title="Rus Dili"
                    href="/courses/2"
                    src={russian}
                    description=" Bu kursla rus dilini asanlıqla öyrənə bilərsiniz."
                  />
                  <ProductItem
                    title="Fransız Dili"
                    href="/courses/4"
                    src={france}
                    description="Bu kursla fransız dilini asanlıqla öyrənə bilərsiniz."
                  />
                </div>
              </MenuItem>
              <NavLink to={'/contact'} className="nav-link text-black dark:text-white" activeClassName="active">
                <MenuItem setActive={setActive} active={active} item="Əlaqə">
                  <div className="flex flex-col space-y-4 text-sm">
                    <p >Bizimlə Əlaqə Saxla</p>
                  </div>
                </MenuItem>
              </NavLink>
              <NavLink to={'/blogs'} className="nav-link text-black dark:text-white" activeClassName="active">
                <MenuItem setActive={setActive} active={active} item="Bloq">
                  <div className="flex flex-col space-y-4 text-sm">
                    <p >Ən son yeniliklərdən xəbərdar olun!</p>
                  </div>
                </MenuItem>
              </NavLink>
             
            </Menu>
            {/* <li>
              <NavLink to="/contact" className="nav-link text-black dark:text-white" activeClassName="active">
                Əlaqə
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/blogs" className="nav-link text-black dark:text-white" activeClassName="active">
                Bloq
              </NavLink>
            </li> */}
          </ul>
        </div>

        {/* Render Mobile Menu only when isMenuOpen is true */}
        {isMenuOpen && (
          <motion.div
            className={`items-center justify-between w-full md:hidden`}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            variants={menuVariants}
          >
            <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg bg-gray-100 dark:bg-gray-800 ">
              <li>
                <Link onClick={toggleMenu} to="/" className="block py-2 pl-3 pr-4 text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700">Ana Səhifə</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/about" className="block py-2 pl-3 pr-4 text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700">Haqqımızda</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/contact" className="block py-2 pl-3 pr-4 text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700">Əlaqə</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/blogs" className="block py-2 pl-3 pr-4 text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700">Bloq</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
