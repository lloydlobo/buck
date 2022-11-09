import React from 'react'
import BucketsTable from '../components/bucket/BucketsTable'
import Stats from '../components/bucket/stats/Stats'
import Layout from '../components/Layout'
import TransactionsTable from '../components/TransactionsTable'
import ButtonGroupBuckets from '../components/ui/ButtonGroupBuckets'

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
        <Layout title='Buckets' >
            <div className="grid grid-flow-row">
                <div className='flex mb-2 mt-0'><Stats /></div>
                <ButtonGroupBuckets />
                <div className='mb-2'><TransactionsTable /></div>
            </div>
        </Layout >
    )
}
