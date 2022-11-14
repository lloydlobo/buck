// import type { NextPage } from 'next'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { SpinnerLoading } from '../components/ui/SpinnerLoading';
import brandName from '../utils/brandName';

const Home = () => {
    const [loading, setloading] = useState(true); // Pre-loader before page renders

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);
    }, []);

    return (
        <Layout title="Home Page">
            {loading ? (
                <SpinnerLoading />
            ) : (
                <div className="grid h-full place-content-center">
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
                    {/*                     <div className="aspect-w-1 aspect-h-1 h-0 w-full rounded-xl bg-yellow-300 shadow-lg"></div> */}
                </div>
            )}
        </Layout>
    );
};

export default Home;
