import Shape from "./Shape";

// If forgotten: https://www.youtube.com/watch?v=DCoIeGt4g7M&list=PL4ruoTJ8LTT8250F2ZrYVmRO6o5gWZKpG
const BOX_DATA = [
    [1,1,1],
    [1,0,0],
    [1,1,1],
];

export default function InteractiveShape() {
    return (
        <>
            <Shape data={BOX_DATA}></Shape>
        </>
    )
}