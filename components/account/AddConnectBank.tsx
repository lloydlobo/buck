import React from 'react';

export function AddConnectBank({ onSubmit, setConnectBank }: any) {
    return (
        <div className="m-6 grid place-content-center place-items-center items-center gap-4 place-self-center py-12 shadow-md">
            <form action="submit" onSubmit={onSubmit}>
                <label
                    className="label-text label opacity-70"
                    htmlFor="connectBank"
                >
                    Connect
                </label>
                <input
                    id="connectBank"
                    type="text"
                    placeholder="Connect to bank name"
                    onChange={(e) => setConnectBank(e.target.value)}
                    className="input-bordered input input-sm focus:outline-pink-400"
                />
                <button type="submit" className="btn btn-success btn-sm mb-4">
                    Connect
                </button>
            </form>
        </div>
    );
}
