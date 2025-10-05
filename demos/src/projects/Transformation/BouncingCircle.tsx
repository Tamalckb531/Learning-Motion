import React from "react";
import * as motion from "motion/react-client";

const BouncingCircle = () => {
  return (
    <motion.div
      className=" bg-red-500 rounded-full w-20 h-20"
      animate={{ y: [100, -300, 100] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

export default BouncingCircle;
