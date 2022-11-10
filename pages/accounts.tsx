import React from 'react'
import AccountsSidebar from '../components/account/AccountsSidebar'
import AccountsTable from '../components/AccountsTable'
import Stats from '../components/bucket/stats/Stats'
import Layout from '../components/Layout'
import TransactionsTable from '../components/TransactionsTable'
import ButtonGroupAccounts from '../components/ui/ButtonGroupAccounts'

// TODO: Keep Stats sticky.
export default function accounts() {
    return (
        <Layout title='Accounts'>
            <div className='flex mb-2 mt-0'><Stats /></div>
            <div><ButtonGroupAccounts /></div>

            <div className='grid grid-cols-12 border-t border-neutral'>
                <div className='col-span-5 h-full border-r border-neutral row-span-2 sm:col-span-3'>
                    <AccountsSidebar />
                </div >

                <div className='col-span-7 row-span-1 sm:col-span-9'>
                    <AccountsTable />
                    <TransactionsTable />
                </div >
            </div>
        </Layout>
    )
}


