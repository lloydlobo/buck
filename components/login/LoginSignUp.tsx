import { useRouter } from 'next/router';
import React from 'react';

export default function LoginSignUp() {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col border-opacity-50">
                <div className="divider">
                    <span className=" text-sm opacity-50">New to Buckets?</span>
                </div>

                <button
                    onClick={() => router.push('/signup')}
                    className="btn-ghost input btn bg-base-300 shadow-md"
                >
                    Create your Buckets account
                </button>
            </div>
        </>
    );
}
