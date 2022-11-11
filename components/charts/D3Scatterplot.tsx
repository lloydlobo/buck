import React, { useState } from 'react'
import styles from "../../styles/scatterplot.module.css";
import * as d3 from 'd3'
import { AxisLeft } from './AxisLeft'
import { AxisBottom } from './AxisBottom'

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 }

// Component skeleton.
type ScatterplotProps = {
    width: number
    height: number
    data: {
        x: number; y: number; size: number; group: string, subGroup: string,
    }[];
}

/**
* D3Scatterplot.
*
* Read the data. 
* Do some stuff with d3. 
* Compute all the <circle> 
*/
// https://www.react-graph-gallery.com/scatter-plot
export default function D3Scatterplot({ width, height, data }: ScatterplotProps) {
    // This code creates an instance of a RefObject that can take a ref of type HTMLDivElement;
    // https://www.pluralsight.com/guides/using-react-refs-typescript
    // const divRef = useRef<HTMLDivElement>(null);

    // State
    // const [interactionData, setInteractionData] = useState<InteractionData>();
    const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

    // Layout. The div size is set by the given props.
    // The bounds (=area inside the axis) is calculated by substracting the margins
    const boundsWidth = width - MARGIN.right - MARGIN.left
    const boundsHeight = height - MARGIN.top - MARGIN.bottom

    // Scales: D3 js set of predefined.
    const yScale = d3.scaleLinear()
        .domain([35, 85]) // Data goes from 0 to 10.
        .range([boundsHeight, 0]) // Axis goes from 0 to 200.
    const xScale = d3.scaleLinear()
        .domain([-3000, 50000]) // Data goes from 0 to 10.
        .range([0, boundsWidth]) // Axis goes from 0 to 200.

    // const sizeScale = d3.scaleSqrt().domain([0, 32]).range([3, 40]);
    const allGroups = data.map((d) => String(d.group));
    const colorScale = d3
        .scaleOrdinal()
        .domain(allGroups)
        .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

    // Build the shapes.
    const allShapes = data.map((d, i) => {
        const className = hoveredGroup && d.group !== hoveredGroup
            ? (styles.scatterplotCircle + " " + styles.dimmed)
            : (styles.scatterplotCircle)

        // const size = sizeScale(d.size);
        // const xPos = xScale(d.x) - size / 2;
        // const yPos = yScale(d.y) - size / 2;

        return (
            <circle
                key={i}
                r={5} // Radius.
                cx={xScale(d.x)}
                cy={yScale(d.y)}
                opacity={1}
                className={className}
                stroke={colorScale(d.group)}
                fill={colorScale(d.group)}
                fillOpacity={0.2}
                strokeWidth={1}
                onMouseOver={() => setHoveredGroup(d.group)} // callback to update the state.
                onMouseLeave={() => setHoveredGroup(null)} // and to set it back to null.
            // onMouseMove={() => setInteractionData({ xPos, yPos, ...d, }) } // callback to update the state.
            // onMouseLeave={() => setInteractionData(undefined)} // and to set it back to undefined.
            />
        )
    })

    return (
        <div>
            <svg width={width} height={height}>
                {/* // axes and circles go here */}
                {/* first group is for the violin and box shapes */}
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
                >
                    {/* Y axis */}
                    <AxisLeft
                        yScale={yScale}
                        pixelsPerTick={40}
                        width={boundsWidth}
                    />

                    {/* X axis, use an additional translation to appear at the bottom */}
                    <g transform={`translate(0, ${boundsHeight})`}>
                        <AxisBottom
                            xScale={xScale}
                            pixelsPerTick={40}
                            height={boundsHeight}
                        />
                    </g>
                    {allShapes}
                </g>
            </svg>
        </div >
    )
}

// scale(0) // 0 --> Item with a value of 0 at axis's extreme left. 
// scale(5) // 100 --> Middle of the axis.
// scale(10) // 200 --> Extreme right of the axis.
// useEffect(() => {
//     if (divRef.current) {
//         console.log(`hookRef div width: ${divRef.current.clientWidth}`);
//         ({ width, height } = useDimensions(divRef))
//         console.log(width, height)
//     } else {
//         console.log(width, height)
//     }
// }, []);
//
// USE Where {allShapes} is added.
{/* <div */ }
{/*     style={{ */ }
{/*         position: "absolute", */ }
{/*         width, */ }
{/*         height, */ }
{/*         top: 0, */ }
{/*         left: 0, */ }
{/*         pointerEvents: "none", */ }
{/*     }} */ }
{/* > */ }
{/*     <Tooltip interactionData={interactionData} /> */ }
{/* </div> */ }
{/* Circles */ }
