import React from "react";
import * as motion from "motion/react-client";

const SpinningIcon = () => {
  return (
    <motion.img
      src={"https://avatars.githubusercontent.com/u/134912393?v=4"}
      className=" rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  );
};

export default SpinningIcon;
