import React, { useState } from 'react'
import Link from 'next/link'
import { transactions } from '../utils/transactions'
import { data } from '../utils/data';
import { transition } from 'd3';


export default function BucketsTable() {
    let isActive = false;
    const [disabled, setDisabled] = useState(false)

    const handleClickEditTransaction = () => {
        setDisabled(!disabled)
    }

    const handleEditable = () => {
        isActive ? isActive = false : isActive = true
        console.log(isActive)

    }

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
                        <th>Posted</th>
                        <th>Account</th>
                        <th>Memo</th>
                        <th>Amount</th>
                        <th><div className='tooltip tooltip-bottom z-50' data-tip='Bucket'>Category</div></th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {/* -- input rows --  */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>

                        {/* Posted */}
                        <th>
                            <input
                                type="text"
                                placeholder=""
                                className="input input-md w-24 sm:w-32  input-bordered "
                            />
                        </th>

                        {/* Account */}
                        <th>
                            <div className="form-control">
                                <div className="input-group relative">
                                    <select className="select w-full select-bordered bg-none">
                                        <option disabled selected></option>
                                        {data.accounts.map((account) => {
                                            return (
                                                <option>{account.type}</option>
                                            )
                                        })}
                                    </select>
                                    <span className="absolute pointer-events-none bg-transparent text-info inset-y-0 right-0 ml-3 flex items-center pr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </th>

                        {/* Memo */}
                        <th>
                            <input
                                type="text"
                                placeholder=""
                                className="input input-bordered w-full max-w-xs"
                            />
                        </th>

                        {/* Amount */}
                        <th>
                            <div className='flex gap-1 items-center'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="0.00"
                                    className="input rounded-full input-sm input-bordered w-full max-w-xs"
                                />
                            </div>

                        </th>

                        {/* Category */}
                        <th>
                            <div className="input-group relative">
                                <select className="select w-full select-bordered bg-none">
                                    <option disabled selected></option>
                                    {transactions.map((transaction) => {
                                        return (
                                            <option>{transaction.category}</option>
                                        )
                                    })}
                                </select>
                                <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </span>
                            </div>
                        </th>

                        {/* Actions */}
                        <th>
                            <div className=''>
                                <div className='flex gap'>
                                    {/* no-symbol */}
                                    <button className='btn btn-square btn-ghost'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                    </button>
                                    {/* check */}
                                    <button className='btn btn-square btn-ghost'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </th>

                    </tr>


                    {/* -- ROWS --  */}
                    {data.buckets.map((bucket) => (
                        <tr>
                            {/* Checkbox */}
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>

                            {/* Posted */}
                            <th>
                                <input
                                    type="text"
                                    placeholder="31/12/22"
                                    className="input input-md w-24 sm:w-32  input-bordered "
                                />
                            </th>

                            {/* Account */}
                            <th>
                                <div className="form-control">
                                    <div className="input-group relative">
                                        <select className="select w-full select-bordered bg-none">
                                            <option disabled selected></option>
                                            {data.accounts.map((account) => {
                                                return (
                                                    <option>{account.type}</option>
                                                )
                                            })}
                                        </select>

                                        <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </span>
                                        {/* <button className="btn">Go</button> */}
                                    </div>
                                </div>
                            </th>

                            {/* Memo */}
                            <th>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </th>

                            {/* Amount */}
                            <th>
                                <div className='flex gap-1 items-center'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="0.00"
                                        className="input rounded-full input-sm input-bordered w-full max-w-xs"
                                    />
                                </div>

                            </th>

                            {/* TODO: If edit check icon is clicked, style and show border & chevron */}
                            {/* Category */}
                            <th>
                                <div className="input-group relative">
                                    <select className="select w-full select-bordered bg-none">
                                        <option disabled selected></option>
                                        {transactions.map((transaction) => {
                                            return (
                                                <option>{transaction.category}</option>
                                            )
                                        })}
                                    </select>

                                    {/* <button className="btn">Go</button> */}
                                    <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                    </span>
                                </div>
                            </th>

                            {/* Acrions */}
                            {/* TODO: Use useEffect to maintain active editable state for all buttons */}
                            <th>
                                <div className='flex gap'>
                                    {/* no-symbol */}
                                    <button
                                        // onClick={handleEditable}
                                        className={`${isActive
                                            ? 'opacity-100' : 'opacity-0'
                                            } btn btn-square btn-ghost`
                                        }
                                    >
                                        <svg
                                            className={`w-6 h-6`}
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                    </button>

                                    {/* // done check mark. */}
                                    {disabled ? (
                                        <button
                                            onClick={handleClickEditTransaction}
                                            className='btn btn-square btn-ghost'
                                            key={1}

                                        // className={`${disabled ? 'block' : 'hidden'} btn btn-square btn-ghost`}>
                                        // className='btn btn-square btn-ghost'
                                        >
                                            {/* className={`${disabled ? 'block' : 'hidden'} btn btn-square btn-ghost`}> */}
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </button>
                                    ) :
                                        <button
                                            onClick={handleClickEditTransaction}
                                            className='btn btn-square btn-ghost'
                                            disabled={disabled}
                                        >
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    }
                                </div>
                            </th>

                        </tr>
                    ))}
                </tbody>

                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th> </th>
                        <th>Posted</th>
                        <th>Account</th>
                        <th>Memo</th>
                        <th>Amount</th>
                        <th>Category</th>
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

export function NewTransaction() {
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>

            {/* Posted */}
            <th>
                <input
                    type="text"
                    placeholder="31/12/22"
                    className="input input-md w-24 sm:w-32  input-bordered "
                />
            </th>

            {/* Account */}
            <th>
                <div className="form-control">
                    <div className="input-group relative">
                        <select className="select select-bordered bg-none">
                            <option disabled selected></option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                        </select>

                        <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                        </span>
                        {/* <button className="btn">Go</button> */}
                    </div>
                </div>
            </th>
            {/* Memo */}
            <th>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
            </th>
            {/* Amount */}
            <th>
                <div className='flex gap-1 items-center'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 12H6"
                            />
                        </svg>
                    </span>
                    <input type="text" placeholder="0.00" className="input rounded-full input-sm input-bordered w-full max-w-xs" />
                </div>

            </th>
            {/* Category */}

            <th>
                <div className="input-group relative">
                    <select className="select select-bordered bg-none">
                        <option disabled selected></option>
                        <option>T-shirts</option>
                        <option>Mugs</option>
                    </select>
                    <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </span>
                </div>
            </th>
            <th>
                <div className=''>
                    <div className='flex gap-2'>
                        {/* no-symbol */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        {/* check */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                </div>
            </th>
        </tr>
    )
}

// export function name() {
//     return (
//         <tr>
//             <td>
//                 <label>
//                     <input type="checkbox" className="checkbox" />
//                 </label>
//             </td>
//             <th>
//                 <div className="flex items-center space-x-3">
//                     <div>
//                         <div className="font-bold">
//                             <Link href={`buckets/${bucket.slug}`} className='link link-hover' >
//                                 {bucket.name}
//                             </Link>
//                         </div>
//                         {/* <div className="text-sm opacity-50">{bucket.description}</div> */}
//                     </div>
//                 </div>
//             </th>
//             <td>
//                 <div>
//                     <div className="font-bold">
//                         <Link href={`buckets/${bucket.slug}`} className='link link-hover' >
//                             {bucket.name}
//                         </Link>
//                     </div>
//                     {/* <div className="text-sm opacity-50">{bucket.description}</div> */}
//                 </div>
//                 {/* <div className="form-control"> <label className="input-group input-group-sm"> <input type="text" placeholder="0.01" className="input input-bordered input-sm" /> <span>{bucket.budgeted}</span> </label> </div> */}
//             </td>
//             <td>
//                 {monthlySelect()}
//                 {/* {monthlyToggle()} */}
//             </td>
//             <td className=''>
//                 {/* <RadialProgress value={bucket.available / bucket.budgeted * 100} /> */}
//             </td>
//             <td className=''>
//                 {/* <RadialProgress value={bucket.available / bucket.budgeted * 100} /> */}
//             </td>
//             <td>
//                 <div className=''>
//                     <div className='flex gap-2'>
//                         {settings()}
//                         {statistics()}
//                     </div>
//                     <div className='relative'>
//                         <progress className="progress progress-success bg-base-300" value={bucket.available / bucket.budgeted * 100} max="100"></progress>
//                         <div className="tooltip tooltip-left absolute left-0 w-full " data-tip={bucket.available / bucket.budgeted * 100}>
//                             &nbsp;
//                         </div>
//                         {/* <RadialProgress value={bucket.available / bucket.budgeted * 100} /> */}
//                     </div>
//                 </div>
//             </td>
//         </tr>
//     )
// }
