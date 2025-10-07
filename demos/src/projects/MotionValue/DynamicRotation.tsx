"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import React from "react";

const DynamicRotation = () => {
  const rotation = useSpring(0);

  const rotateBox = () => {
    rotation.set(rotation.get() + 45);
  };

  return (
    <motion.div
      style={{ rotate: rotation }}
      onClick={rotateBox}
      className=" w-32 h-32 bg-blue-500 rounded"
    >
      DynamicRotation
    </motion.div>
  );
};

export default DynamicRotation;
