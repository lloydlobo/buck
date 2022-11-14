import React from 'react';
import Image from 'next/image';
import brandName from '../../utils/brandName';
import { FaCheck } from 'react-icons/fa';

export default function HeroHeader() {
    return (
        <>
            {/* min-h-screen*/}
            <div className="hero bg-base-300 py-4 shadow-inner">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src="https://placeimg.com/260/400/arch"
                        className="hidden max-w-sm rounded-lg px-4 shadow-2xl"
                        width={260}
                        height={400}
                        alt={''}
                    />
                    <div className="grid gap-8 text-center">
                        <div className="hero-content flex-col">
                            <h1 className="text-4xl font-light">
                                Delegate{' '}
                                <span className="font-bold">
                                    envelope budgeting
                                </span>{' '}
                                to {brandName}
                            </h1>
                            <p className="py-6 text-lg tracking-wider">
                                Buck visually handles your finances in a{' '}
                                <span className="font-extrabold">1 file</span>
                                &nbsp;
                                <br />
                                Get a birds eye{' '}
                                <span className="font-extrabold">view </span>
                                on your budget
                            </p>
                        </div>

                        <button className="btn-primary btn hidden">
                            Get Started
                        </button>

                        <div className="hero-checks">
                            <div className="grid grid-flow-col gap-12 rounded-full bg-base-100 px-8 py-4 text-sm font-bold opacity-80">
                                <div className="check-item flex items-center gap-2">
                                    <i className="text-success">
                                        <FaCheck />
                                    </i>
                                    <span className="txt">Consolidation</span>
                                </div>
                                <div className="check-item flex items-center gap-2">
                                    <i className="ri-check-line text-success">
                                        <FaCheck />
                                    </i>
                                    <span className="txt">Analysis</span>
                                </div>
                                <div className="check-item flex items-center gap-2">
                                    <i className="ri-check-line text-success">
                                        <FaCheck />
                                    </i>
                                    <span className="txt">Import CSV</span>
                                </div>
                                <div className="check-item flex items-center gap-2">
                                    <i className="ri-check-line text-success">
                                        <FaCheck />
                                    </i>
                                    <span className="txt">Admin dashboard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
