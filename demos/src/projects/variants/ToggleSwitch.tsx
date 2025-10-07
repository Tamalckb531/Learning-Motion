"use client";
import { motion } from "motion/react";
import React, { useState } from "react";

const switchVar = {
  off: { x: 0 },
  on: { x: 80 },
};

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className=" relative inline-block w-36 h-16">
      <div
        className={` w-full h-full rounded-full bg-gray-300 cursor-pointer ${
          isOn ? " bg-green-500" : ""
        }`}
        onClick={() => setIsOn(!isOn)}
      />

      <motion.div
        className=" absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow"
        variants={switchVar}
        animate={isOn ? "on" : "off"}
        transition={{ type: "spring", stiffness: 80 }}
      />
    </div>
  );
};

export default ToggleSwitch;
