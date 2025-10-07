import React from "react";
import * as motion from "motion/react-client";

const text = "Tamal Gonna Make it --- :)";

const staggeredVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredTextReveal = () => {
  return (
    <motion.h1
      className=" text-4xl font-bold text-white"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={staggeredVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default StaggeredTextReveal;
