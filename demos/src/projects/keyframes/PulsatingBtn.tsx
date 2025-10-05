import React from "react";
import * as motion from "motion/react-client";

const PulsatingBtn = () => {
  return (
    <motion.div
      className=" p-4 bg-green-500 text-white rounded"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      Pulse Me
    </motion.div>
  );
};

export default PulsatingBtn;
