import React from 'react';

import Link from 'next/link';
import {
    FaCaretDown,
    FaCaretRight,
} from 'react-icons/fa';

export function LoginHelp({ toggleHelp, setToggleHelp }: any): JSX.Element {
    return (
        <>
            {/* Help with Sign-In. */}
            <div className="mt-4 grid gap-6 text-sm">
                <div
                    className="fyi w-fit opacity-60"
                    style={{ maxWidth: '45ch' }}
                >
                    By continuing, you agree to Bucket&apos;s Conditions of Use
                    and Privacy Notice.
                </div>

                <div tabIndex={0} className="collapse">
                    <input
                        type="checkbox"
                        onClick={() => setToggleHelp(!toggleHelp)}
                        style={{
                            padding: 0,
                            minHeight: '2ch',
                            margin: 0,
                        }}
                    />

                    <div
                        style={{
                            paddingBlock: 3,
                            minHeight: '2px',
                            margin: 0,
                        }}
                        className="collapse-title m-0 flex items-center p-0 leading-none opacity-60"
                    >
                        <span className="text-neutral-content opacity-60">
                            {toggleHelp ? (
                                <FaCaretDown className="" />
                            ) : (
                                <FaCaretRight className="" />
                            )}
                        </span>
                        <span className="link-info ">Need help?</span>
                    </div>
                    <div className="collapse-content">
                        <div className="flex flex-col opacity-60">
                            <Link
                                href={'forgot-password'}
                                className="link-info"
                            >
                                Forgot Password
                            </Link>
                            <Link href={'help-sign-in'} className="link-info">
                                Other issues with Sign-In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
