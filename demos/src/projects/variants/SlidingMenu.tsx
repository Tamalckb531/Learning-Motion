"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const menuVariants = {
  closed: { x: "-100%" },
  open: { x: 0 },
};

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className=" p-2 bg-gray-500 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Menu
      </button>

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.4 }}
        className=" fixed top-0 left-0 w-64 h-full bg-blue-600"
      >
        <ul className=" text-white p-2">
          <li>Home</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SlidingMenu;
