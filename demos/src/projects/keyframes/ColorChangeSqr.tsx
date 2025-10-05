import React from "react";
import * as motion from "motion/react-client";

const ColorChangeSqr = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-teal-500"
      animate={{
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"],
      }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
};

export default ColorChangeSqr;
