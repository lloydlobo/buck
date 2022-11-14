import Head from 'next/head';
import React, { ReactNode, useContext } from 'react';
import { ToastContainer } from 'react-toastify';

import Drawer from './Drawer';
import brandName from '../utils/brandName';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

export default function Layout({
    title,
    children,
}: {
    title: string;
    children: ReactNode | ReactNode[];
}): JSX.Element {
    // const date = new Date().getFullYear();
    // const { theme, toggle, dark } = useContext(ThemeContext);

    return (
        <>
            <Head>
                <title>{title ? title + ` - ${brandName}` : brandName}</title>
                <meta name="description" content="Budgeting Envelope App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Drawer>
                <ToastContainer position="bottom-center" limit={1} />

                <div className="wrapper h-screen">
                    <Header />

                    <main>{children}</main>

                    <Footer />
                </div>
            </Drawer>
        </>
    );
}
