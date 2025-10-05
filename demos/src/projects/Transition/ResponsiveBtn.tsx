import React from "react";
import * as motion from "motion/react-client";

const ResponsiveBtn = () => {
  return (
    <motion.div
      className=" p-2 bg-blue-500 text-white rounded  cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Click Me!
    </motion.div>
  );
};

export default ResponsiveBtn;
