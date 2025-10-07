"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
];

const GestureBasedImgGal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (_: any, info: any) => {
    if (info.offset.y > 100)
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    else if (info.offset.y < -100) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div className=" relative w-72 h-72 overflow-hidden">
      <AnimatePresence>
        <motion.img
          className=" w-full h-full rounded"
          key={currentIndex}
          src={images[currentIndex]}
          alt="Yo this is an image"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleSwipe}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default GestureBasedImgGal;
