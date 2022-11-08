// import type { NextPage } from 'next'
import Stats from '../components/bucket/stats/Stats'
import { ChartMultitype } from '../components/charts/ChartMultitype'
import D3ScatterplotWithTooltip from '../components/charts/D3ScatterplotWithTooltip'
import Layout from '../components/Layout'
import { data } from '../utils/dataD3Scatterplot'


const Home = () => {
    let width = 500;
    let height = 300;
    return (
        <Layout title='Home Page' >
            <>
                {/* <div className="relative max-w-screen grid items-center w-full"> */}
                <D3ScatterplotWithTooltip data={data} width={width} height={height} />
                <div className='flex mb-4 mt-0'><Stats /></div>
                <ChartMultitype />
                {/* </div> */}
            </>
        </Layout >
    )
}

export default Home
