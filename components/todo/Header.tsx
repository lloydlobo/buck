import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

import { HiPlus } from 'react-icons/hi2';
import { ButtonOpenClose } from '../ui/button/ButtonOpenClose';

export function TodoHeader({
    showForm,
    changeTextAndColor,
}: {
    showForm: any;
    changeTextAndColor: boolean;
}): JSX.Element {
    return (
        <div className="card-compact mb-6 grid w-96 place-content-center gap-4">
            <h2 className="app-header card-title">Task Manager</h2>

            <div
                className="tooltip grid gap-1 place-self-center "
                data-tip={`${changeTextAndColor ? 'Close' : 'Create'}`}
            >
                <ButtonOpenClose
                    onClick={showForm}
                    isEnabled={changeTextAndColor}
                />
                <div className="text-xs opacity-80 sm:hidden">
                    {changeTextAndColor ? 'Close' : 'Create'}
                </div>
            </div>
        </div>
    );
}
