import { Stage, Layer, Group, Rect, Circle } from "react-konva"

const GroupComponent = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Group x={100} y={100} draggable>
                <Rect x={50} y={50} height={50} width={50} fill='blue'/>
                <Circle x={150} y={150} radius={40} fill='green'/>
            </Group>
            <Group x={200} y={200} draggable>
                <Rect x={150} y={150} height={50} width={50} fill='red'/>
                <Circle x={250} y={250} radius={40} fill='yellow'/>
            </Group>
        </Layer>
    </Stage>
  )
}

export default GroupComponent