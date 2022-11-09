import React from 'react'
import AccountsTable from '../components/AccountsTable'
import Stats from '../components/bucket/stats/Stats'
import StatsCarousel from '../components/bucket/stats/StatsCarousel'
import Layout from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import ButtonGroupBuckets from '../components/ui/ButtonGroupBuckets'

export default function accounts() {
    return (
        <Layout title='Accounts' >
            <div className='sm:inline-grid hidden w-full'><Stats /></div>

            <div className='flex sm:hidden'><StatsCarousel /></div>

            {/* <PageHeading /> */}

            <ButtonGroupBuckets />

            <AccountsTable />
        </Layout>
    )
}


