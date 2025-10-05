import React from "react";
import * as motion from "motion/react-client";

const ComplexAnimation = () => {
  return (
    <motion.div
      className=" bg-purple-500 h-20 w-20"
      animate={{ x: 200, rotate: 360, scale: 3 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  );
};

export default ComplexAnimation;
