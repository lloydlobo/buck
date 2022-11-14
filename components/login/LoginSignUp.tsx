import React from 'react';

export default function LoginSignUp() {
    return (
        <>
            <div className="flex flex-col border-opacity-50">
                <div className="divider">
                    <span className=" text-sm opacity-50">New to Buckets?</span>
                </div>

                <button className="btn-ghost btn input bg-base-300 shadow-md">
                    Create your Buckets account
                </button>
            </div>
        </>
    );
}
