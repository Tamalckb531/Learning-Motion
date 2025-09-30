"use client";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

const UMotionVal = () => {
  const x = useMotionValue(600);

  useMotionValueEvent(x, "animationStart", () => {});

  return (
    <motion.div
      className="box"
      drag
      dragConstraints={{ left: 0, right: 200 }}
      style={{ x }}
    />
  );
};

export default UMotionVal;
