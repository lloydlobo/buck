import React from 'react'
import Link from 'next/link'
import { data } from '../utils/data'

export default function AccountsTable() {
    return (
        < div className="overflow-x-auto px-6 w-full" >
            <table className="table table-compact w-full">
                {/* -- head --  */}
                <thead>
                    <tr>
                        <th>
                            <div className="dropdown dropdown-bottom tooltip tooltip-bottom" data-tip='Notes' >
                                <label tabIndex={0} className="btn btn-disabled m-0 p-0 btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <textarea className="textarea" placeholder="Bio"></textarea>
                                </ul>
                            </div>
                        </th>
                        <th>Account</th>
                        <th>Balance</th>
                        <th>Type</th>
                    </tr>
                </thead>

                {/* -- rows --  */}
                <tbody>
                    {data.accounts.map((account) => (
                        <tr>
                            <td>
                                <div className="dropdown dropdown-bottom" >
                                    <label tabIndex={0} className="btn m-0 p-0 btn-ghost text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <textarea className="textarea" placeholder="Notes">{account.notes}</textarea>
                                    </ul>
                                </div>

                                <div className='hidden disabled'>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </div>
                            </td>

                            <th>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">
                                            <Link
                                                href={`buckets/${account.type}`}
                                                className='link link-hover'
                                            >
                                                {account.name}
                                            </Link>
                                        </div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </th>

                            <td>
                                <div className="form-control">
                                    <span>{account.balance}</span>
                                </div>
                            </td>
                            <td>
                                <div className="form-control">

                                    {/* TODO: add mapped select option here. */}
                                    <span>{account.type}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th>
                        </th>
                        <th>Account</th>
                        <th>Balance</th>
                        <th>Type</th>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}

