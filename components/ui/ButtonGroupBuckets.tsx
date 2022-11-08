import React from 'react'

export default function ButtonGroupBuckets() {
    return (
        <div className="mb-2 mt-2 px-4 flex gap-4  place-self-center place-items-center items-center flex-wrap">
            <div className="btn-group sm:flex-row sm:flex">
                <button className="btn btn-sm text-xs btn-active">Make it rain &nbsp;{money()}</button>
                <button className="btn btn-sm text-xs">New bucket</button>
                <button className="btn btn-sm text-xs">New group</button>
            </div>
            <div className="">
                <div className="stat-value text-base">0</div>
                <div className='flex items-center gap-2'>
                    <div className="stat-title text-sm">Rain/<span className='text-secondary'>mo</span></div>
                    <div className="stat-desc text-secondary">{info('Rain per month')}</div>
                </div>
            </div>
        </div>
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
