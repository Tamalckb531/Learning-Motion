import DraggableBox from "@/projects/Gestures/DraggableBox";
import GestureBasedImgGal from "@/projects/Gestures/GestureBasedImgGal";
import LongPressToChange from "@/projects/Gestures/LongPressToChange";
import RotateOnDrag from "@/projects/Gestures/RotateOnDrag";
import SwappableCard from "@/projects/Gestures/SwappableCard";
import TapToChangeColor from "@/projects/Gestures/TapToChangeColor";

export default function Home() {
  return (
    <div className="">
      {/* <SwappableCard /> */}
      {/* <DraggableBox /> */}
      {/* <RotateOnDrag /> */}
      {/* <TapToChangeColor /> */}
      <LongPressToChange />
      {/* <GestureBasedImgGal /> */}
    </div>
  );
}
