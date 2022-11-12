import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

import { HiPlus } from 'react-icons/hi2';

export function TodoHeader({
    showForm,
    changeTextAndColor,
}: {
    showForm: any;
    changeTextAndColor: any;
}): JSX.Element {
    return (
        <div className="mb-6 grid w-full place-content-center gap-4">
            <h2 className="app-header card-title">Task Manager</h2>
            <div
                className="tooltip tooltip-right place-self-center"
                data-tip={`${changeTextAndColor ? 'Close' : 'Create'}`}
            >
                <button
                    /* color={changeTextAndColor ? 'red' : 'green'} */
                    className={` btn-circle btn ${
                        changeTextAndColor
                            ? 'bg-pink-400 text-base-100 hover:bg-pink-400   '
                            : 'bg-success text-base-100 hover:bg-success  '
                    }`}
                    onClick={showForm}
                >
                    {changeTextAndColor ? (
                        <FaTimes name="Close" />
                    ) : (
                        <FaPlus name="Create" />
                    )}
                </button>
            </div>
        </div>
    );
}
