import React, { ReactNode } from 'react';

import Cookies from 'js-cookie';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import brandName from '../utils/brandName';
import Drawer from './Drawer';
import { MenuDropdown } from './navbar/MenuDropdown';
import { Navbar } from './navbar/Navbar';
import { Footer } from './ui/Footer';

/* const date = new Date().getFullYear();
       {theme, toggle, dark } = useContext(ThemeContext); */
export default function Layout({
    title,
    children,
}: {
    title: string;
    children: ReactNode | ReactNode[];
}): JSX.Element {
    // Status shows loading of session, so while loading we avoid showing username.
    const { status, data: session } = useSession();

    const logoutClickHandler = (e: any) => {
        e.preventDefault();

        // TODO: Add taskAdded key to js-cookie pkg not to localStorage directly.
        Cookies.remove('taskAdded');
        // TODO: dispatch({ type: 'TASK_RESET' }) in Store.tsx.

        signOut({ callbackUrl: '/login' });
    };
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
                                {(function (): JSX.Element {
                                    if (status === 'loading') {
                                        return <div>Loading</div>;
                                    } else {
                                        return session?.user ? (
                                            <MenuDropdown
                                                logoutClickHandler={
                                                    logoutClickHandler
                                                }
                                            >
                                                {session.user.name}
                                            </MenuDropdown>
                                        ) : (
                                            <Link
                                                href={'/login'}
                                                className="btn-ghost btn"
                                            >
                                                Login
                                            </Link>
                                        );
                                    }
                                })()}
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
