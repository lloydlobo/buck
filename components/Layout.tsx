import Head from 'next/head';
import React, { ReactNode, useContext } from 'react';
import { ToastContainer } from 'react-toastify';

import { signIn, signOut, useSession } from 'next-auth/react';
import Drawer from './Drawer';
import brandName from '../utils/brandName';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import { Navbar } from './navbar/Navbar';
import { LoginBtn } from './login/LoginBtn';

export default function Layout({
    title,
    children,
}: {
    title: string;
    children: ReactNode | ReactNode[];
}): JSX.Element {
    // const date = new Date().getFullYear();
    // const { theme, toggle, dark } = useContext(ThemeContext);

    const { data: session } = useSession();

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
                    {/* <Header /> */}

                    <header
                        className=" z-30 h-16 w-full justify-center border-b border-base-300 
                        bg-base-100 bg-opacity-70 text-base-content shadow-md 
                        backdrop-blur transition-all duration-100"
                    >
                        <nav className="w-full bg-opacity-90">
                            <Navbar>
                                <LoginBtn />
                                {session ? (
                                    <>
                                        Signed in as {session.user.email} <br />
                                        <button onClick={() => signOut()}>
                                            Sign out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        Not signed in <br />
                                        <button onClick={() => signIn()}>
                                            Sign in
                                        </button>
                                    </>
                                )}
                            </Navbar>
                        </nav>
                    </header>

                    <main>{children}</main>

                    <Footer />
                </div>
            </Drawer>
        </>
    );
}
