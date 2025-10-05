import React from "react";
import * as motion from "motion/react-client";
const BouncingBall = () => {
  return (
    <motion.div
      className=" w-16 h-16 bg-yellow-400 rounded-full"
      animate={{
        y: [100, -250, 100],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

export default BouncingBall;
