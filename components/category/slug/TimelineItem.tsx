import React from 'react';

export function TimelineItem({ isCollapsed, name, date, body, isLatest }: any) {
    return (
        <li className={` ${isCollapsed ? 'ml-6' : 'mb-10 ml-6'} `}>
            <span
                className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full 
                ${
                    isCollapsed
                        ? ''
                        : ' bg-base-300 ring-8 ring-base-200 dark:bg-base-300 dark:ring-gray-900'
                } `}
            >
                <svg
                    aria-hidden="true"
                    className="h-3 w-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-darkreader-inline-fill=""
                    style={
                        {
                            '--darkreader-inline-fill': 'currentColor',
                        } as any
                    }
                >
                    <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </span>
            {isCollapsed ? (
                <>
                    <div className="flex items-center gap-2">
                        <h3 className="flex items-center text-sm ">{name}</h3>
                        <time className="text-sm  text-gray-400 dark:text-gray-500">
                            {date}
                        </time>
                        {isLatest ? (
                            <span className="badge mr-2 ml-3 rounded px-2.5 py-0.5 text-sm font-medium ">
                                Latest
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <h3 className="mb-1 flex items-center text-sm font-semibold">
                        {name}
                        {isLatest ? (
                            <span className="badge mr-2 ml-3 rounded px-2.5 py-0.5 text-sm font-medium ">
                                Latest{' '}
                            </span>
                        ) : (
                            <></>
                        )}
                    </h3>
                    <time className="mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                        {date}
                    </time>
                    <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                        {body}
                    </p>
                </>
            )}
        </li>
    );
}
