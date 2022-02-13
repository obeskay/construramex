import { motion } from "framer-motion";

const Button = ({ children, className = "", variant = null }) => {
  const defaultTransition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const buttonAnimation = {
    default: {
      scale: 1,
      transition: defaultTransition,
    },
    hover: {
      scale: 1.05,
      transition: defaultTransition,
    },
  };
  switch (variant) {
    case "outline-light":
      return (
        <motion.button
          variants={buttonAnimation}
          whileHover="hover"
          className={`btn bg-transparent border border-light text-light ${className}`}
        >
          {children}
        </motion.button>
      );
    case "outline-gray-dark":
      return (
        <motion.button
          variants={buttonAnimation}
          whileHover="hover"
          className={`btn bg-transparent border border-gray-dark text-gray-dark ${className}`}
        >
          {children}
        </motion.button>
      );
    case "outline-dark":
      return (
        <motion.button
          variants={buttonAnimation}
          whileHover="hover"
          className={`btn bg-transparent border border-dark text-dark ${className}`}
        >
          {children}
        </motion.button>
      );
    case "outline-light md:outline-dark":
      return (
        <motion.button
          variants={buttonAnimation}
          whileHover="hover"
          className={`btn bg-transparent border border-light text-light md:border-dark md:text-dark ${className}`}
        >
          {children}
        </motion.button>
      );
    default:
      return (
        <motion.button
          variants={buttonAnimation}
          whileHover="hover"
          className={`btn bg-arena ${className}`}
        >
          {children}
        </motion.button>
      );
  }
};

export default Button;
