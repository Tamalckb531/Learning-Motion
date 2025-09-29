import * as motion from "motion/react-client";

//? Stagger animation is a way to add delay between all the children element animation of the parent. It's like parent guiding the children animation to execute one by one with a delay

const parentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Stagger = () => {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="visible"
      className=" flex space-x-4 "
    >
      {[...Array(5)].map((_, index) => (
        <motion.div variants={childVariants} key={index} className=" box" />
      ))}
    </motion.div>
  );
};

export default Stagger;
