import * as motion from "motion/react-client";

//? Gestures animation works when user does something. Like tapping, hover, drag, press etc

const Gestures = () => {
  return (
    <motion.div
      className="box flex items-center justify-center"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.8, rotate: 0, backgroundColor: "orange" }}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: -50,
        bottom: -50,
      }}
      whileDrag={{ scale: 0.8, rotate: 0, backgroundColor: "orange" }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      Tamal
    </motion.div>
  );
};

export default Gestures;
