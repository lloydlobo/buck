import React from 'react'
import { data } from '../../utils/data/data'
import Link from 'next/link'


export default function BucketsTable() {
    return (
        < div className="overflow-x-auto px-6 w-full" >

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
                        <th></th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {/* -- rows --  */}
                <tbody>
                    {data.buckets.map((bucket) => (
                        <tr key={bucket.id}>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>

                            <th>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">
                                            <Link
                                                href={`buckets/${bucket.slug}`}
                                                className='link link-hover'
                                            >
                                                {bucket.name}
                                            </Link>
                                        </div>
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
                                {/* <RadialProgress value={bucket.available / bucket.budgeted * 100} /> */}
                            </td>
                            <td className=''>
                                {/* <RadialProgress value={bucket.available / bucket.budgeted * 100} /> */}
                            </td>
                            <td>
                                <div className=''>
                                    <div className='flex gap-2'>
                                        {settings()}
                                        {statistics()}
                                    </div>
                                    <div className='relative'>
                                        <progress className="progress progress-success bg-base-300" value={bucket.available / bucket.budgeted * 100} max="100"></progress>
                                        <div className="tooltip tooltip-left absolute left-0 w-full " data-tip={bucket.available / bucket.budgeted * 100}>
                                            &nbsp;
                                        </div>
                                        {/* <RadialProgress value={bucket.available / bucket.budgeted * 100} /> */}
                                    </div>
                                </div>
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
                        <th></th>
                        <th>Actions</th>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}

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
