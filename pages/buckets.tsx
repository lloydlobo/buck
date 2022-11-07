import React from 'react'
import BucketsTable from '../components/bucket/BucketsTable'
import Stats from '../components/bucket/stats/Stats'
import Layout from '../components/Layout'

export default function Buckets() {
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
                <div className="max-w-screen grid items-center w-full">
                    <div className='flex mb-4 mt-0'><Stats /></div>
                    <div className='mb-2'><BucketsTable /></div>
                </div>
            </>
        </Layout >
    )
}

