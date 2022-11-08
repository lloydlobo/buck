import React from 'react'

// <div className="stats bg-base-300 text-primary-content">
export default function StatsCarousel() {
    return (
        <>
            <div className="stats prose-sm grid-flow-row-dense w-full grid-cols-2 sm:grid-rows-1 sm:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            className="hidden sm:inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value text-base">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            className="hidden sm:inline-block  w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value text-base">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            className="hidden sm:inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value text-base">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>


                <div className="stat bg-base-200">
                    <div className="stat-title">Account balance</div>
                    <div className="stat-value text-base">$89,400</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm btn-success">Add funds</button>
                    </div>
                </div>

                <div className="stat bg-base-300 col-span-2">
                    <div className="stat-title">Current balance</div>
                    <div className="stat-value text-base">$89,400</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm">Withdrawal</button>
                        <button className="btn btn-sm">deposit</button>
                    </div>
                </div>

            </div>
        </>
    )
}

