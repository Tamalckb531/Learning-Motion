"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const listVar = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const DynamicList = () => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button
        onClick={addItem}
        className=" mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Item
      </button>

      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={listVar}
            initial="exit"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.3 }}
            className=" p-2 bg-gray-200 mb-2 rounded"
            onClick={() => removeItem(index)}
          >
            {item}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default DynamicList;
