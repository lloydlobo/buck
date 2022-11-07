import React from 'react'

export default function SearchInput() {
    return (
        <>
            <div className="form-control mt-4">
                <label className="input-group input-group-xs">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input rounded-none pl-8 input-sm  w-44"
                    />
                    <button className="btn btn-sm btn-square btn-ghost absolute border-transparent hover:bg-info">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/* Can use before after to choose a bigger overlay to hide ctrl K on hover. */}
                    {/* <div className="hidden absolute hover:opacity-0 right-16 top-7 gap-1 p-0 m-0 opacity-50 lg:flex"> */}
                    {/*     <kbd className="kbd kbd-xs text-[8px]">ctrl</kbd> */}
                    {/*     <kbd className="kbd kbd-xs text-[8px]">K</kbd> */}
                    {/* </div> */}
                </label>
            </div>
        </>

    )
}
