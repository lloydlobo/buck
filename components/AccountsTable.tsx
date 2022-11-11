import React, { useState } from 'react'
import { data } from '../utils/data/data'

export default function AccountsTable() {
    // const [disabled, setDisabled] = useState(false)
    // const handleClickEditTransaction = () => { setDisabled(!disabled) }
    // const handleClickClearTransaction = () => { }
    const today = new Date().toDateString()
    return (
        <>
            {/* TODO: Make table head sticky */}
            <div className='px-6 border-b border-neutral'>
                {data.accounts.map((account) => {
                    if (account.name === 'Bank of Westeros') {
                        return (
                            <>
                                <div key={account.uuid} className="mb-4 gap-4">
                                    <div className='text-xl uppercase'>{account.type}</div>
                                    <div className="stats w-full mb-4 shadow-inner">
                                        <div className="stat">
                                            <div className="hidden stat-figure text-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <div className="stat-title">Balance</div>
                                            <div className="stat-value text-base">{account.balance}</div>
                                            <div className="stat-desc">{today}</div>

                                        </div>
                                        <div className="stat">
                                            <div className="hidden stat-figure text-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <div className="stat-title">In</div>
                                            <div className="stat-value text-base">31.00</div>
                                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                                        </div>
                                        <div className="stat">
                                            <div className="hidden stat-figure text-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                            </div>
                                            <div className="stat-title">Out</div>
                                            <div className="stat-value text-base">4,200.00</div>
                                            <div className="stat-desc">↗︎ 400 (22%)</div>
                                        </div>
                                        <div className="stat">
                                            <div className="hidden stat-figure text-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                            </div>
                                            <div className="stat-title">Net</div>
                                            <div className="stat-value text-base">1,200.00</div>
                                            <div className="stat-desc">↘︎ 90 (14%)</div>
                                        </div>
                                        <div className='stat'>
                                            <div className="form-control gap-4">
                                                <div className="input-group input-group-sm grid grid-cols-3 items-center">
                                                    <select className="select select-sm select-bordered col-span-2 w-full">
                                                        <option disabled selected>Pick Type</option>
                                                        <option>Normal</option>
                                                        <option>Off-budget</option>
                                                        <option>Debt</option>
                                                    </select>
                                                    <button className="btn btn-sm bg-base-300">Go</button>
                                                </div>
                                                <button className='btn btn-sm bg-base-300'>Actions</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })}
            </div >
        </>
    )
}

