import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

import { HiPlus } from 'react-icons/hi2';
import { ButtonOpenClose } from '../ui/ButtonOpenClose';

export function TodoHeader({
    showForm,
    changeTextAndColor,
}: {
    showForm: any;
    changeTextAndColor: boolean;
}): JSX.Element {
    return (
        <div className="mb-6 grid w-full place-content-center gap-4">
            <h2 className="app-header card-title">Task Manager</h2>
            <div
                className="tooltip tooltip-right place-self-center"
                data-tip={`${changeTextAndColor ? 'Close' : 'Create'}`}
            >
                <ButtonOpenClose
                    onClick={showForm}
                    isEnabled={changeTextAndColor}
                />
            </div>
        </div>
    );
}
