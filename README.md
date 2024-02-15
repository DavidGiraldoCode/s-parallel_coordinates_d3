# SandBox of Parallel Coordinates with D3.js

The final goal:

[Parallel coordinates](https://observablehq.com/@d3/parallel-coordinates)

Useful methods:

- `extent(iterable, accessor)` return [min, max] in a given array
- an `accessor` function tells d3 which value to access within a data point. If the dataset is an array of values, the `accessor` is not necessary `(d => d)`, but if the dataset has a key-value structure the `accessor` will indicate which key to use `d => d.key`.
- `scaleLinear(domain, rage)` Scales map a domain into physical pixel units to display on the screen.
- `axis(scale)` An Axis is a `<g>` element, with a `<path/>` element with `className=”domain”` and 
`<g>` elements with `className=”tick”`, representing each step in the domain. Each one with a line to draw the tick and a label.

Simple example of an axis.

```jsx
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export function ParallelCoordinates(props){

    const svgRef = useRef(null);
    const svgCanvasWidth = 800;
    const svgCanvasHeight = 400;
    const svgCanvasMargin = 50;
    
    function axisCreation (){
				const nDimensionScale = d3.scaleLinear([0, 600], [svgCanvasMargin, svgCanvasWidth - svgCanvasMargin]);
        const svgElement = d3.select(svgRef.current);
        const nAxisDimension =  d3.axisBottom(nDimensionScale);
        svgElement.append("g").call(nAxisDimension);

    }
    useEffect(axisCreation, []);
    return( 
    <div className="parallel-coordinates-presenter">
        <svg ref={svgRef} width={svgCanvasWidth} height={svgCanvasHeight} style={{backgroundColor : "beige"}}></svg>
    </div> )
}
```
