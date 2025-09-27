import * as motion from "motion/react-client";

//? Transitions decide how the animation gonna happen. Like the timing, speed, duration etc
//? We can define duration, easing (for speed curve) and delay for this

const Transitions = () => {
  return (
    <motion.div
      className="box"
      initial={{ x: 0 }}
      animate={{ x: 500 }}
      transition={{ delay: 2, duration: 1, ease: "circIn" }}
    />
  );
};

export default Transitions;
