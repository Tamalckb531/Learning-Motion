import React from "react";
import * as motion from "motion/react-client";

const WaveEffect = () => {
  const boxes = Array.from({ length: 5 });

  return (
    <div className=" flex space-x-2">
      {boxes.map((_, index) => (
        <motion.div
          key={index}
          className=" w-16 h-16 bg-purple-500 rounded-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default WaveEffect;
