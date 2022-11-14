import React from 'react';
import Link from 'next/link';

export default function AccountsSidebar({ data }) {
    return (
        <>
            <div className="flex h-full flex-col">
                <div className=" flex-1" style={{}}>
                    <div className="overflow-auto " style={{}}>
                        <table className="table-compact table h-full w-full text-sm tracking-tight">
                            <thead className="">
                                <tr>
                                    <th>
                                        <div
                                            className="tooltip tooltip-right cursor-pointer align-middle "
                                            data-tip="Notes"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-4 w-4 opacity-70"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                />
                                            </svg>
                                        </div>
                                    </th>
                                    <th>Account</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {data.accounts.map((account) => (
                                    <tr key={account.uuid}>
                                        <td>
                                            <div className="dropdown-bottom dropdown">
                                                <label
                                                    tabIndex={0}
                                                    className="btn-ghost btn btn-xs m-0 p-0 text-gray-500"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                        />
                                                    </svg>
                                                </label>
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content menu rounded-box w-52 bg-base-100 shadow"
                                                >
                                                    <textarea
                                                        className="textarea"
                                                        placeholder="Notes"
                                                    >
                                                        {account.notes}
                                                    </textarea>
                                                </ul>
                                            </div>

                                            <div className="disabled hidden">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        className="checkbox"
                                                    />
                                                </label>
                                            </div>
                                        </td>

                                        <th>
                                            <div className="flex flex-col">
                                                <div>
                                                    <div className="font-bold">
                                                        <Link
                                                            href={`buckets/${account.type}`}
                                                            className="link-hover link"
                                                        >
                                                            {account.name}
                                                        </Link>
                                                    </div>
                                                    <div className="text-sm opacity-50"></div>
                                                </div>

                                                {/* TODO: add mapped select option here. */}
                                                <div className="form-control opacity-50">
                                                    <span>{account.type}</span>
                                                </div>
                                            </div>
                                        </th>

                                        <td>
                                            <div className="form-control">
                                                <span>{account.balance}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex h-8 flex-row items-center bg-base-300 px-4">
                    <span className="flex flex-1 items-center text-xs ">
                        21-30 of 100{' '}
                    </span>
                    <div className="flex items-center">
                        <button className="btn-ghost btn btn-xs m-1 p-0">
                            «
                        </button>
                        <button className="btn-ghost btn btn-xs m-1 p-0">
                            1
                        </button>
                        <button className="btn-ghost btn btn-xs m-1 p-0">
                            2
                        </button>
                        <button className="btn-ghost btn-disabled btn btn-xs m-1 p-0">
                            ...
                        </button>
                        <button className="btn-ghost btn btn-xs m-1 p-0">
                            99
                        </button>
                        <button className="btn-ghost btn btn-xs m-1 p-0">
                            100
                        </button>
                        <button className="btn-ghost btn btn-xs m-1 p-0">
                            »
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
