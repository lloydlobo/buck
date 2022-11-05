// import type { NextPage } from 'next'
import { Tab } from '@headlessui/react'
import BucketItem from '../components/BucketItem'
import Layout from '../components/Layout'
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
            <div className="max-w-screen">
                {/* https://headlessui.com/react/tabs */}
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-emerald-900/20 p-1">
                        {Object.keys(category).map((items) => (
                            <Tab
                                key={items}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-emerald-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-amber-600'
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
                                {/* buckets */}
                                {/* < div className='grid grid-cols-1 gap-x-4 md:grid-cols-3 lg:grid-cols-4' > */}
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
                            </Tab.Panel>
                        ))}

                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Layout >
    )
}


export default Home
