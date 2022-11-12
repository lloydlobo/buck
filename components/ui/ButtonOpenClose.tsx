import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

export function ButtonOpenClose({
    onClick,
    isEnabled,
}: {
    onClick: any;
    isEnabled: boolean;
}): JSX.Element {
    return (
        <button
            /* color={changeTextAndColor ? 'red' : 'green'} */
            className={`btn-circle btn motion-safe:hover:animate-pulse  ${
                isEnabled
                    ? 'bg-pink-400 text-base-100 hover:bg-pink-400   '
                    : 'bg-success text-base-100 hover:bg-success'
            }`}
            onClick={onClick}
        >
            {isEnabled ? (
                <FaTimes name="Close" />
            ) : (
                <FaPlus name="Create" className="h-5 w-5 hover:animate-spin" />
            )}
        </button>
    );
}
