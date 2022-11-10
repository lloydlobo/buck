import React, { useState } from 'react'
import Link from 'next/link'
import { data } from '../utils/data'
import AccountsHeader from './account/AccountsHeader'
import { transactions } from '../utils/transactions'
import { PageHeading } from './PageHeading'
import TransactionsTable from './TransactionsTable'
import ButtonGroupAccounts from './ui/ButtonGroupAccounts'

export default function AccountsTable() {

    const [disabled, setDisabled] = useState(false)
    const handleClickEditTransaction = () => { setDisabled(!disabled) }

    const handleClickClearTransaction = () => { }
    return (
        <>
            {/* TODO: Make table head sticky */}
            <div className='px-6 border-b border-neutral'>
                {data.accounts.map((account) => {
                    if (account.name === 'Bank of Dodge') {
                        return (
                            <>
                                <div className='text-xl uppercase'>{account.type}</div>
                                <div className=''>{account.balance}</div>
                                <div className='form-control'>
                                    <div className=''> In </div>
                                    <div className=''> Out </div>
                                    <div className=''> Net </div>
                                    <div className="input-group relative">
                                        <select className="select select-sm w-fit select-bordered bg-none">
                                            <option disabled selected></option>
                                            {transactions.map((transaction) => { return (<option>{transaction.category}</option>) })}
                                        </select>
                                        <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /> </svg>
                                        </span>
                                    </div>
                                    <button className='btn w-fit'>Actions</button>
                                </div>
                            </>
                        )
                    }
                })}
            </div >
        </>
    )
}

