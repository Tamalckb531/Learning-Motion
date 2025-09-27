import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="">
      <motion.div className="box" animate={{ x: 200 }} />
    </div>
  );
}
