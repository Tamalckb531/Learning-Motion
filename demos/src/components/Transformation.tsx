import * as motion from "motion/react-client";

//? Transformation change the div. Either position or size
//? We have x,y for direction change, rotate, scale, skew etc

const Transformation = () => {
  return <motion.div className="box" animate={{ skewY: 20 }} />;
};

export default Transformation;
