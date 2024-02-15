import * as d3 from "d3";

/*Notes about D3
- extent(iterable, accessor) return [min, max] in a given array
- scaleLinear(domain, rage)

*/

export function ParallelCoordinates(props){
 //viewBox="0 0 300 100"


    const svgCanvasWidth = 800;
    const svgCanvasHeight = 400;
    const svgCanvasMargin = 40;

    const data = d3.ticks(0, 600, 5); // array of int nicelly rounded and evently spaced
    //const x = d3.scaleLinear([0, data.length-1], [svgCanvasMargin, svgCanvasWidth-svgCanvasMargin]); // scaleLinear(domain, rage)
    const y = d3.scaleLinear(d3.extent(data), [svgCanvasMargin, svgCanvasHeight - svgCanvasMargin]); 
    const yTwo = d3.scaleLinear(d3.extent(data), [5, svgCanvasHeight - 10]); 
    const x = d3.scalePoint(data, [svgCanvasMargin, svgCanvasHeight - svgCanvasMargin]);
    //const y = d3.scaleLinear([0, data.length-1], [svgCanvasMargin, svgCanvasHeight - svgCanvasMargin]);
    const line = d3.line(svgCanvasMargin, y) //line(dataArray)

    const lineB = d3.line(svgCanvasMargin, yTwo) //line(dataArray)

    //console.log(x);
    /*
    (d, i) => {
        console.log(d);
    */


    function moveByMouseACB(e){
        document.querySelector("#line").setAttribute("y2", e.clientY);
        document.querySelector("#line").setAttribute("x2", e.clientX);
    }

    return( 
    <div className="parallel-coordinates-presenter">
        <h1>Hello ParallelCoordinates</h1>
        <svg width={svgCanvasWidth} height={svgCanvasHeight} style={{backgroundColor : "beige"}}>
            <path fill="none" stroke="black" strokeWidth={4} d={line(data)}/>
            <path fill="none" stroke="red" strokeWidth={1} d={lineB(data)}/>
        </svg>
    </div> )

}

/*
<svg width={800} height={400} xmlns="http://www.w3.org/2000/svg" onMouseMove={moveByMouseACB} style={{backgroundColor : "red"}}>
            <rect x={20} y={20} width={20} height={20}/>
            <circle cx={80} cy={80} r={20} />
            <line id="line" x1={20} y1={20} x2={100} y2={100} stroke="black" strokeWidth={5}/>
            <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
            <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
        </svg>
*/