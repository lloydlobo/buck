import type { NextPage } from 'next'
import BucketItem from '../components/BucketItem'
import Layout from '../components/Layout'
import data from '../utils/data'

const Home = () => {
    return (
        <Layout title='Home Page' >

            <div className='grid grid-cols-4 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                {
                    data.buckets.map((bucket) => (
                        <BucketItem
                            bucket={bucket}
                            key={bucket.slug}
                        // onSubmit={onSubmitHandler}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Home
