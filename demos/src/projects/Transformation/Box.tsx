import React from "react";
import * as motion from "motion/react-client";

const Box = () => {
  return (
    <motion.div
      className=" bg-blue-500 w-20 h-20"
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 2 }}
    />
  );
};

export default Box;
