import Link from 'next/link';
import React from 'react';
import brandName from '../../../utils/brandName';

export function IndexLoginCard() {
    return (
        <div className="item-center flex h-full w-96 flex-col place-content-center gap-6 place-self-center rounded-xl bg-base-300 object-contain py-8 px-8 text-center shadow-lg">
            <div className="hero-title">
                <h1 className="animate-none text-center text-3xl leading-9 tracking-tighter opacity-100">
                    {brandName}
                </h1>
                <h2 className="text-sm font-bold tracking-wider opacity-60">
                    Envelope budgeting.
                </h2>
            </div>
            <div className="btn-group btn-group-vertical gap-2">
                <Link href={'/login'} className="btn btn-active">
                    Login
                </Link>
                <Link href={'/signup'} className="btn">
                    Sign Up
                </Link>
                <Link href={'/docs'} className="btn">
                    Docs
                </Link>
            </div>
        </div>
    );
}
