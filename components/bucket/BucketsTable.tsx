import React from 'react'
import { RadialProgress } from './stats/RadialProgress'
import { XCircleIcon } from '@heroicons/react/outline'
import data from '../../utils/data'


export default function BucketsTable() {

    return (
        < div className="overflow-x-auto px-6 w-full" >
            <div className="btn-group gap-2 lg:btn-group-horizontal mb-2 items-center">
                <button className="btn btn-active">Make it rain &nbsp;{money()}</button>
                <button className="btn">New bucket</button>
                <button className="btn">New group</button>
                <div className="">
                    <div className="stat">
                        <div className="stat-value">0</div>
                        <div className='flex items-center gap-2'>
                            <div className="stat-title">Rain/<span className='text-secondary'>mo</span></div>
                            <div className="stat-desc text-secondary">{info('Rain per month')}</div>
                        </div>
                    </div>

                </div>
            </div>

            <table className="table table-compact w-full">
                {/* -- head --  */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Bucket</th>
                        <th>Balance</th>
                        <th>Repeat</th>
                        <th>Transact</th>
                        <th>Rain</th>
                        <th>Details</th>
                    </tr>
                </thead>

                {/* -- rows --  */}
                <tbody>
                    {data.buckets.map((bucket) => (
                        <tr>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>

                            <th>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">{bucket.name}</div>
                                        <div className="text-sm opacity-50">{bucket.description}</div>
                                    </div>
                                </div>
                            </th>

                            <td>
                                <div className="form-control">
                                    <label className="input-group input-group-sm">
                                        <input type="text" placeholder="0.01" className="input input-bordered input-sm" />
                                        <span>{bucket.budgeted}</span>
                                    </label>
                                </div>
                            </td>

                            <td>
                                {monthlySelect()}
                                {/* {monthlyToggle()} */}
                            </td>
                            <td className=''>
                                <div className='brightness-75 filter saturate-50'>
                                    <RadialProgress value={bucket.available / bucket.budgeted * 100} />
                                </div>
                            </td>
                            <td>
                                {settings()}
                            </td>
                            <td>
                                {statistics()}
                            </td>
                        </tr>
                    ))}
                </tbody>
                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Bucket</th>
                        <th>Balance</th>
                        <th>
                            Repeat
                            {/* <XCircleIcon className="h-5 w-5"></XCircleIcon> */}
                        </th>
                        <th>Transact</th>
                        <th>Rain</th>
                        <th>Details</th>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}

const money = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
)

const info = (dataTip: string) => (
    <div className="tooltip tooltip-right" data-tip={dataTip}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
        </svg>
    </div>
)

const monthlySelect = () => (
    <select className="select select-ghost w-full max-w-xs">
        {/* <option disabled>Pick the best JS framework</option> */}
        <option selected>Monthly</option>
        <option>One Time</option>
        <option>15 days</option>
    </select>
)

const monthlyToggle = () => (
    <div className="form-control w-52">
        <label className="cursor-pointer label">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="toggle toggle-secondary" checked />
        </label>
    </div>
)

const settings = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
)

const statistics = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
        <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
    </svg>
)
