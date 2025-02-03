import { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

const RectComponent = () => {
  const [color, setColor] = useState("blue");
  const handleClick = () => {
    setColor(color === "blue" ? "green" : "blue");
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={50}
          y={50}
          height={50}
          width={50}
          fill={color}
          shadowBlur={10}
          draggable
          onClick={handleClick}
        />
      </Layer>
    </Stage>
  );
};

export default RectComponent;
