// import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import Layout from '../components/Layout';
import { Footer } from '../components/ui/Footer';
import { Header } from '../components/ui/Header';
import HeroHeader from '../components/ui/Hero';
import { Mascot } from '../components/ui/Mascot';
import { SpinnerLoading } from '../components/ui/SpinnerLoading';
import { Window } from '../components/ui/Window';
import brandName from '../utils/brandName';

const Home = () => {
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const title = 'Home page';

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);
    }, []);

    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Budgeting Envelope App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? (
                <div className="wrapper h-screen w-full">
                    {/* <Header /> */}
                    <main>
                        <SpinnerLoading />
                    </main>
                </div>
            ) : (
                <div className="wrapper h-screen w-full">
                    <Header />

                    <main className="mb-6">
                        <div className="grid h-full gap-6 ">
                            <HeroHeader />
                            {/* TODO: Add proximate hover effect!  */}
                            <figure className="relative z-10 px-6">
                                <Window />
                                <div className="absolute -top-20 left-10 -z-10 ">
                                    <Mascot />
                                </div>
                            </figure>
                        </div>
                    </main>

                    <Footer />
                </div>
            )}
        </>
    );
};

export default Home;
