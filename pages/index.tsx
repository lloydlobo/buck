// import type { NextPage } from 'next'
import Stats from '../components/bucket/stats/Stats';
import { ChartMultitype } from '../components/charts/ChartMultitype';
import D3ScatterplotWithTooltip from '../components/charts/D3ScatterplotWithTooltip';
import Layout from '../components/Layout';
import { dataD3ScatterPlot } from '../utils/data/d3Scatterplot';

const Home = () => {
    let width = 500;
    let height = 300;
    return (
        <Layout title="Home Page">
            <>
                {/* <div className="relative max-w-screen grid items-center w-full"> */}
                <D3ScatterplotWithTooltip
                    data={dataD3ScatterPlot}
                    width={width}
                    height={height}
                />
                <div className="mb-4 mt-0 flex">
                    <Stats />
                </div>
                <ChartMultitype />
                {/* </div> */}
            </>
        </Layout>
    );
};

export default Home;
