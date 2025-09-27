import * as motion from "motion/react-client";

//? Keyframes are basically a way to use a single animation with multiple variables using array

const Keyframes = () => {
  return (
    <motion.div
      className="box flex items-center justify-center"
      animate={{
        scale: [1, 2, 2, 4, 3, 2, 2, 1],
        rotate: [0, -45, 45, 0],
        borderRadius: ["100%", "20%", "30%", "50%", "30%", "20%", "100%"],
      }}
      transition={{ delay: 1, duration: 5, ease: "circIn" }}
    >
      Tamal
    </motion.div>
  );
};

export default Keyframes;
