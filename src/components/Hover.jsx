import { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

const Hover = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect 
        x={100} 
        y={100} 
        width={50}
        height={50}
        draggable
        fill={isHover ? "green" : "blue"} 
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        />
      </Layer>
    </Stage>
  );
};

export default Hover;
