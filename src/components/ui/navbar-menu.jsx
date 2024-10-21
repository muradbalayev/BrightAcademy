import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)} /* Close on mouse leave */
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      <AnimatePresence>
        {active === item && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }} /* Exit animation */
            transition={transition}
          >
            <div className="absolute top-[calc(100%_+_0rem)] left-1/2 transform lg:-translate-x-1/2 -translate-x-2/3 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full lg:p-4 p-2">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav className="relative flex space-x-8">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}) => {
  return (
    <Link
      to={href}
      className="flex items-center gap-3 lg:min-h-[160px] hover:bg-gray-200 dark:hover:bg-neutral-800 p-4 rounded-xl"
    >
      <div className="w-[140px] h-[100px] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="object-fit w-full h-full rounded-md shadow-2xl"
        />
      </div>
      <div>
        <h4 className="lg:text-xl text-lg font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 lg:text-sm text-xs max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black">
      {children}
    </Link>
  );
};
