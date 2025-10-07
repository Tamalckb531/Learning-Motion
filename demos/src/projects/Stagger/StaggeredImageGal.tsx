import React from "react";
import * as motion from "motion/react-client";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
];

const staggeredVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredImageGal = () => {
  return (
    <motion.div
      className=" flex"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 1 } } }}
    >
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt="This is image"
          className=" w-[20rem] h-auto ml-[2rem] rounded"
          variants={staggeredVar}
        />
      ))}
    </motion.div>
  );
};

export default StaggeredImageGal;
