import { useMemo } from 'react';
import { ScaleLinear } from 'd3';

// https://codesandbox.io/s/github/holtzy/react-graph-gallery/tree/main/viz/AxisBasic?from-embed=&file=/AxisBottom.tsx
type AxisBottomProps = {
    xScale: ScaleLinear<number, number>;
    pixelsPerTick: number;
    height: number;
};

// tick length
const TICK_LENGTH = 6;

export const AxisBottom = ({
    xScale,
    pixelsPerTick,
    height,
}: AxisBottomProps) => {
    const range = xScale.range();

    type TicksProps = { value: number; xOffset: number }[];
    const ticks: TicksProps = useMemo(() => {
        const width = range[1] - range[0];
        const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

        return xScale.ticks(numberOfTicksTarget).map((value: number) => ({
            value,
            xOffset: xScale(value),
        }));
    }, [xScale]);

    return (
        <>
            {/* Main horizontal line */}
            <path
                d={['M', range[0], 0, 'L', range[1], 0].join(' ')}
                fill="none"
                stroke="currentColor"
            />

            {/* Ticks and labels */}
            {ticks.map(({ value, xOffset }) => (
                <g
                    key={value}
                    transform={`translate(${xOffset}, 0)`}
                    shapeRendering={'crispEdges'}
                >
                    <line
                        y1={TICK_LENGTH}
                        y2={-height - TICK_LENGTH}
                        stroke="currentColor"
                        strokeWidth={0.5}
                    />
                    <text
                        key={value}
                        style={{
                            fontSize: '0.8rem',
                            textAnchor: 'middle',
                            transform: 'translateY(1.25rem)',
                            fill: 'currentcolor',
                        }}
                    >
                        {value}
                    </text>
                </g>
            ))}
        </>
    );
};
