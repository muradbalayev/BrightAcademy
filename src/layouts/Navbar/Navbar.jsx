import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {  FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiSun } from "react-icons/bi";

export default function Navbar() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <nav className={`fixed w-full z-20 top-0 left-0 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'} dark:text-white text-gray-800 `}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">BrightAcademy</span>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={toggleTheme}
            className='p-3 rounded-full dark:bg-yellow-300 dark:text-gray-900 bg-gray-800 text-yellow-300 hover:scale-110'
            aria-label="Toggle dark mode"
          >
            {isDarkTheme ? <BiSun size={20} /> : <FaMoon size={18} />}
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
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          } ${isMenuOpen ? 'animate-slideDown' : ''}`}
          id="navbar-sticky"
        >
          <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:md:bg-transparent dark:bg-gray-900 md:bg-transparent bg-white   `}>
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-black dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 pl-3 pr-4 text-black dark:text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 pl-3 pr-4 text-black dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center py-2 pl-3 pr-4 text-black dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blogs <FiChevronDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <ul className={`absolute left-0 mt-2 py-2 w-48 rounded-md shadow-lg ${isDarkTheme ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                  <li>
                    <Link href="/blogs/technology" className="block text-black dark:text-white px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Technology</Link>
                  </li>
                  <li>
                    <Link href="/blogs/education" className="block text-black dark:text-white px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Education</Link>
                  </li>
                  <li>
                    <Link href="/blogs/science" className="block text-black dark:text-white px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Science</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}