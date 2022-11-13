import React from 'react';

export function AddNewAccount({ onSubmit, setAccount }: any) {
    return (
        <div className="m-6 grid place-content-center place-items-center items-center gap-4 place-self-center py-12 shadow-md">
            <form action="submit" onSubmit={onSubmit}>
                <label
                    className="label-text label opacity-70"
                    htmlFor="newAccount"
                >
                    New Account Name
                </label>
                <input
                    id="newAccount"
                    type="text"
                    placeholder="Account name"
                    onChange={(e) => setAccount(e.target.value)}
                    className="input-bordered input input-sm focus:outline-pink-400"
                />
                <button type="submit" className="btn btn-success btn-sm mb-4">
                    Create
                </button>
            </form>
        </div>
    );
}
