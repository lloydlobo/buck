import { useMemo } from 'react';
import { ScaleLinear } from 'd3';

// https://codesandbox.io/s/github/holtzy/react-graph-gallery/tree/main/viz/AxisBasic?from-embed=&file=/AxisLeft.tsx
type AxisLeftProps = {
    yScale: ScaleLinear<number, number>;
    pixelsPerTick: number;
    width: number;
};

// Tick length.
const TICK_LENGTH = 6;

/**
 * AxisLeft.
 *
 */
export function AxisLeft({ yScale, pixelsPerTick, width }: AxisLeftProps) {
    const range: number[] = yScale.range();

    type TicksProps = { value: number; yOffset: number }[];
    // useMemo will only recompute the memoized value,
    // when one of the `deps` has changed.
    const ticks: TicksProps = useMemo(() => {
        const height: number = range[0] - range[1];
        const numberOfTicksTarget: number = Math.floor(height / pixelsPerTick);

        return yScale.ticks(numberOfTicksTarget).map((value: number) => ({
            value,
            yOffset: yScale(value),
        }));
    }, [yScale]);

    return (
        <>
            {/* Main vertical line. */}
            <path
                d={['M', 0, range[0], 'L', 0, range[1]].join('')}
                fill="none"
                stroke="currentColor"
            />

            {/* Ticks and Labels. */}
            {ticks.map(({ value, yOffset }) => (
                <g
                    key={value}
                    transform={`translate(0, ${yOffset})`}
                    shapeRendering={'crispEdges'}
                >
                    <line
                        x1={-TICK_LENGTH}
                        x2={width + TICK_LENGTH}
                        stroke="currentColor"
                        strokeWidth={0.5}
                    />
                    <text
                        key={value}
                        style={{
                            fontSize: '0.8rem',
                            textAnchor: 'middle',
                            transform: 'translateX(-1.25rem)',
                            fill: 'currentcolor',
                        }}
                    >
                        {value}
                    </text>
                </g>
            ))}
        </>
    );
}
