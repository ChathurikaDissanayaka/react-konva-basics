import { Stage, Layer, Circle, Text } from "react-konva"

const MultipleShapes = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerWidth}>
        <Layer>
            <Circle x={70} y={70} radius={60} fill='blue'/>
            <Text x={10} y={200} text="Hello Konva!" fontSize={32} fill='black'/>
        </Layer>
    </Stage>
  )
}

export default MultipleShapes