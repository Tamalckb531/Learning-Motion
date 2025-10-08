"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React from "react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className=" h-[200vh] p-[20px] text-white ">
      <motion.div
        className=" fixed top-0 left-0 h-[5px] bg-red-500"
        style={{ width: lineWidth, transition: "width 1 ease" }}
      />

      <div className=" mt-[50px]">
        {[...Array(100)].map((_, i) => (
          <p key={i} className=" mt-[20px]">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sequi
            consectetur perspiciatis. Nihil omnis recusandae ullam consectetur
            et, cumque veritatis rerum illo repellendus magni eius debitis
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
