import React from 'react';

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
            <div className="place-self-center">
                <button
                    className="btn-ghost btn"
                    onClick={showForm}
                    color={changeTextAndColor ? 'text-primary' : 'text-danger'}
                >
                    {changeTextAndColor ? 'Close' : 'Add'}
                </button>
            </div>
        </div>
    );
}
