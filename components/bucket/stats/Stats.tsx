import React from 'react'

// <div className="stats bg-base-300 text-primary-content">
export default function Stats() {
    return (
        <>
            <div className="stats sm:prose-xs bg-base-200 md:prose-base grid-cols-3 w-full grid-rows-1 sm:grid-rows-1 sm:grid-cols-4 mb-4 overflow-hidden shadow-inner border border-base-200">
                <div className="stat">
                    <div className="stat-figure col-span-1  hidden text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            className="w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Rain</div>
                    <div className="stat-value text-base">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="sm:grid grid-flow-col col-span-3 hidden border-neutral">
                    <div className="stat border-r-transparent">
                        <div className="stat-figure text-secondary hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                className="hidden sm:inline-block  w-8 h-8 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"> </path>
                            </svg>
                        </div>
                        <div className="stat-title">Income</div>
                        <div className="stat-value text-base">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat border-r-transparent border-l-transparent">
                        <div className="stat-figure text-secondary opacity-60 hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                className="hidden sm:inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Expenses</div>
                        <div className='flex relative'>
                            <div className="stat-value text-base">1,200</div>
                            {/* -translate-x-[3.85vw] */}
                            <span className='absolute p-0 m-0 -translate-x-[5ch] translate-y-2 opacity-60'>
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                </svg>
                            </span>
                        </div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                    <div className="stat border-r-transparent border-l-transparent">
                        <div className="stat-figure text-secondary hidden"> {/* minus icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                className="hidden sm:inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Month's Loss</div>
                        <div className='flex relative'>
                            <div className="stat-value text-base">1,200</div>
                            <span className='absolute p-0 m-0 -translate-x-[5ch] translate-y-1 opacity-60'>
                                =
                            </span>
                        </div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>

                <div className="stat col-span-1">
                    <div className="stat-title">In the bank</div>
                    <div className="stat-value text-base">1,200</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm btn-success">Add funds</button>
                    </div>
                </div>
                <div className="stat col-span-1">
                    <div className="stat-title"></div>
                    <div className="stat-value text-base">Jan 01 2022</div>
                </div>

                <div className="stat bg-base-300 hidden">
                    <div className="grid grid-flow-col-dense">
                        <div className="">
                            <div className="stat-title">Current balance</div>
                            <div className="stat-value text-base">$89,400</div>
                            <div className="stat-actions btn-group-vertical">
                                <button className="btn btn-sm">Withdrawal</button>
                                <button className="btn btn-active btn-sm">deposit</button>
                            </div>
                        </div>

                        <div>
                            <div className="stat-title">Income</div>
                            <div className="stat-value text-base">0</div>
                            <div className='flex items-center gap-2'>
                                <div className="stat-desc text-sm">Rain/<span className='text-secondary'>mo</span></div>
                                <div className="stat-desc text-secondary">{info('Rain per month')}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


const info = (dataTip: string) => (
    <div className="tooltip tooltip-right" data-tip={dataTip}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
        </svg>
    </div>
)
