import React from 'react';

export default function ButtonGroupAccounts() {
    return (
        <div className="mb-4 grid grid-flow-col-dense items-center justify-between gap-x-4 px-4">
            <div className="btn-group btn-group-vertical hidden sm:flex sm:flex-row sm:btn-group-horizontal ">
                <button className="btn btn-active btn-sm text-xs">
                    New Account &nbsp;{heroiconsMoney()}
                </button>
                <button className="btn btn-sm text-xs">
                    Connect to Bank &nbsp;{heroiconsPlus()}
                </button>
                {/* <button className="btn btn-sm text-xs">New group &nbsp;{heroiconsFolderPlus()}</button> */}
            </div>
            <div className="hidden">
                <div className="grid grid-flow-col-dense sm:hidden">
                    <button className="btn-ghost btn grid place-items-center gap-2">
                        {heroiconsMoney()}
                        <span className="text-xs">Make it rain</span>
                    </button>
                    <button className="btn-ghost btn grid place-items-center gap-2">
                        {heroiconsPlus()}
                        <span className="text-xs">New bucket</span>
                    </button>
                    <button className="btn-ghost btn grid place-items-center gap-2">
                        {heroiconsFolderPlus()}
                        <span className="text-xs">New group</span>
                    </button>
                </div>
                <div className="hidden sm:grid">
                    <div className="stat-value text-base">0</div>
                    <div className="flex items-center gap-2">
                        <div className="stat-title text-sm">
                            Rain/<span className="text-secondary">mo</span>
                        </div>
                        <div className="stat-desc text-secondary">
                            {info('Rain per month')}
                        </div>
                    </div>
                </div>
                <button className="btn btn-sm hidden text-xs sm:flex sm:w-fit">
                    Make it so &nbsp;
                    {heroiconsCircleStack()}
                </button>
                <button className="btn-ghost btn mb-0 grid place-items-center gap-2 text-xs sm:hidden">
                    {heroiconsCircleStack()}
                    <span className="mt-0">Make it so</span>
                </button>
            </div>
        </div>
    );
}

const heroiconsMoney = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
    </svg>
);

const heroiconsFolderPlus = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
    </svg>
);
const heroiconsPlus = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
        />
    </svg>
);

const heroiconsCircleStack = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
    </svg>
);

const info = (dataTip: string) => (
    <div className="tooltip tooltip-right" data-tip={dataTip}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
        >
            <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
            />
        </svg>
    </div>
);
