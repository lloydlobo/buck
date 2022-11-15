import React from 'react';
import Image from 'next/image';
import brandName from '../../../utils/brandName';
import { FaCheck } from 'react-icons/fa';
import { IndexLoginCard } from '../misc/IndexLoginCard';

const styleHero = {
    backgroundImage:
        'linear-gradient(rgba(26,26,26,0.8), rgba(26,26,26,0.6)),' +
        "url('paper-cut-abstract-background-3d-clean-dark-carving-art-paper-craft-black-waves-minimalistic-modern-design-business-presentations.jpg')",
};

// https://css-tricks.com/apply-a-filter-to-a-background-image/
export default function HeroHeader() {
    return (
        <>
            <div
                className="hero bg-base-300 object-cover py-4  shadow-inner backdrop-blur-2xl"
                style={styleHero}
                data-pattern-credit="https://www.freepik.com/free-photo/paper-cut-abstract-background-3d-clean-dark-carving-art-paper-craft-black-waves-minimalistic-modern-design-business-presentations_11221103.htm#page=6&position=15&from_view=author"
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/*                     <Image
                        src="https://placeimg.com/260/400/arch"
                        className=" max-w-sm rounded-lg px-4 shadow-2xl"
                        width={260}
                        height={400}
                        alt={''}
                    /> */}

                    {/* <IndexLoginCard /> */}
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

                            <form>
                                <div className="rounded-lg">
                                    <div className="grid grid-cols-3 gap-0 rounded-xl bg-neutral-content">
                                        <div className="col-span-2 m-0 p-0">
                                            <dl className="relative">
                                                <dt className="">
                                                    <label
                                                        htmlFor="user_email"
                                                        className="sr-only"
                                                    >
                                                        Email address
                                                    </label>
                                                </dt>
                                                <dd className="">
                                                    <input
                                                        type="text"
                                                        placeholder="Email address"
                                                        className=" input rounded-l-lg bg-neutral-content text-lg text-neutral placeholder:text-lg  placeholder:text-neutral"
                                                    />
                                                </dd>
                                            </dl>
                                        </div>
                                        <button
                                            className="btn btn-md col-span-1"
                                            style={{
                                                borderEndEndRadius: '0.5rem',
                                                borderStartEndRadius: '0.5rem',
                                            }}
                                        >
                                            Sign Up for {brandName}{' '}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="hidden h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
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
