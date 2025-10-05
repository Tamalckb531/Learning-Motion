"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const SkewRectangle = () => {
  const [isSkewed, setIsSkewed] = useState(false);
  return (
    <motion.div
      className=" bg-amber-500 w-40 h-40"
      onClick={() => setIsSkewed((prev) => !prev)}
      animate={{ skewX: isSkewed ? -20 : 0, skewY: !isSkewed ? -20 : 20 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default SkewRectangle;
