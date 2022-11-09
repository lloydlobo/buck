import React from 'react'
import AccountsTable from '../components/AccountsTable'
import Stats from '../components/bucket/stats/Stats'
import StatsCarousel from '../components/bucket/stats/StatsCarousel'
import Layout from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import ButtonGroupBuckets from '../components/ui/ButtonGroupBuckets'

// TODO: Keep Stats sticky.
export default function accounts() {
    return (
        <Layout title='Accounts' >
            <div className='flex mb-2 mt-0'><Stats /></div>

            {/* <div className='sm:inline-grid hidden w-full'><Stats /></div> */}
            {/* <div className='flex sm:hidden'><StatsCarousel /></div> */}

            {/* <PageHeading /> */}

            <ButtonGroupBuckets />

            {/* TODO: Make table head sticky */}
            <AccountsTable />
        </Layout>
    )
}


