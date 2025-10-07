"use client";
import { motion } from "motion/react";
import React, { useState } from "react";

const toolTipVar = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Tooltip = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" relative inline-block">
      <button
        className=" p-2 bg-blue-500 text-white"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {" "}
        Hover over me
      </button>

      {visible && (
        <motion.div
          className=" absolute bg-gray-700 text-white p-2 rounded text-nowrap"
          variants={toolTipVar}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
        >
          Tooltip Content
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
