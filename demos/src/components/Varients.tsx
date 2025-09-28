import * as motion from "motion/react-client";
// import { motion } from "motion/react";

//? Variants use for consistency. Like we can write full animation as a variants and use them in multiple element we like which gonna have same type of animation

const variants = {
  initial: { opacity: 1, scale: 1, rotate: 0 },
  hover: {
    opacity: 0.8,
    scale: 1.2,
    rotate: 15,
    transition: { duration: 0.3 },
  },
  click: {
    opacity: 1,
    scale: 0.89,
    rotate: -15,
    transition: { duration: 0.3 },
  },
};

const Variants = () => {
  return (
    <motion.div
      className=" w-40 h-10 p-2 bg-amber-400 rounded-lg text-center"
      variants={variants}
      initial="initial"
      whileHover="hover"
      whileTap="click"
    >
      Tamal
    </motion.div>
  );
};

export default Variants;
