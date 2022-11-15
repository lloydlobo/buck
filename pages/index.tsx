// import type { NextPage } from 'next'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Footer } from '../components/ui/Footer';
import { Header } from '../components/ui/Header';
import HeroHeader from '../components/ui/index/Hero';
import LiveDemoWindow from '../components/ui/index/LiveDemoWindow';
import { SpinnerLoading } from '../components/ui/SpinnerLoading';
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
                <title>{brandName} - Home Page</title>
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
                        <div className="grid h-full gap-6 overflow-hidden">
                            <HeroHeader />
                            <LiveDemoWindow />
                        </div>
                    </main>

                    <Footer />
                </div>
            )}
        </>
    );
};

export default Home;
