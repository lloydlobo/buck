import React from 'react';

// hover:text-neutral-content
export default function DrawerMenu() {
    return (
        <label
            htmlFor="my-drawer-2"
            className="focus-within::text-neutral-content drawer-button cursor-pointer text-xs lg:hidden"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
        </label>
    );
}
