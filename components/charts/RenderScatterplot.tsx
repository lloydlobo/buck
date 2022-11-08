import D3Scatterplot from "./D3Scatterplot"

const data = [
    { x: 2, y: 4, },
    { x: 8, y: 5, },
]

export const RenderScatterplot = ({ width = 700, height = 400 }) => {
    <D3Scatterplot data={data} width={width} height={height} />
}
