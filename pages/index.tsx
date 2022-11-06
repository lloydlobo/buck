// import type { NextPage } from 'next'
import { Tab } from '@headlessui/react'
import BucketsTable from '../components/bucket/BucketsTable'
import Stats from '../components/bucket/stats/Stats'
import BucketItem from '../components/BucketItem'
import Layout from '../components/Layout'
import CardFooter from '../components/ui/CardFooter'
import data from '../utils/data'

const Home = () => {
    const category = {
        Recent: [{ name: "" },],
        Todo: [{ name: "" },],
        Consolidated: [{ name: "" },],
    }

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Layout title='Home Page' >
            <>
                <div className="max-w-screen">
                    <div className='flex border-transparent border border-base-200 mb-4 mt-0'>
                        <Stats />
                    </div>
                    {/* https://headlessui.com/react/tabs */}
                    <BucketsTable />
                </div>
            </>
        </Layout >
    )
}


export default Home

/*
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-neutral">
                        {Object.keys(category).map((items) => (
                            <Tab
                                key={items}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 prose-sm font-medium leading-5 text-secondary',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-secondary text-neutral shadow'
                                            : 'text-neutral-content hover:bg-base-200 active:bg-white/[0.12] hover:text-neutral-content'
                                    )
                                }
                            >
                                {items}
                            </Tab>
                        ))
                        }
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(category).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl  p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                < div className='grid grid-cols-1 gap-x-4 ' >
                                    {
                                        data.buckets.map((bucket) => (
                                            <div className='card'>
                                                <BucketItem
                                                    bucket={bucket}
                                                    key={bucket.slug}
                                                // onSubmit={onSubmitHandler}
                                                />

                                            </div>
                                        ))
                                    }
                                </div>
                                <CardFooter />
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>

*/
