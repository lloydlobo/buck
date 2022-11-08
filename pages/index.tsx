// import type { NextPage } from 'next'
import Stats from '../components/bucket/stats/Stats'
import { ChartMultitype } from '../components/charts/ChartMultitype'
import D3Scatterplot from '../components/charts/D3Scatterplot'
import Layout from '../components/Layout'
import { data } from '../utils/dataD3Scatterplot'


const Home = () => {
    let width = 500;
    let height = 300;
    return (
        <Layout title='Home Page' >
            <>
                <div className="max-w-screen grid items-center w-full">
                    <div className='flex mb-4 mt-0'><Stats /></div>
                    <div className='grid lg:grid-cols-2'>
                        <D3Scatterplot data={data} width={width} height={height} />
                        {/* <ChartMultitype /> */}
                    </div>
                </div>
            </>
        </Layout >
    )
}

export default Home
