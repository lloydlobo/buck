import React from 'react';

export default function TaskInfo({ now }: any) {
    return (
        <div
            data-tip={now}
            className="btn-square btn-ghost tooltip tooltip-left btn-xs grid cursor-help items-center"
        >
            {/* info icon for timestamp */}
            <div className="opacity-40">
                <svg
                    className="h-6 w-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
