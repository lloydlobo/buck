import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { ThemeProvider } from '../utils/theme-provider';

import { SessionProvider } from 'next-auth/react';
import { Inter } from '@next/font/google';
// import { type AppProps } from 'next/app';

// https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: any): JSX.Element {
    return (
        <SessionProvider session={session}>
            <ThemeProvider>
                <StoreProvider>
                    <div className={`${inter.variable} font-sans`}>
                        <Component {...pageProps} />
                    </div>
                </StoreProvider>
            </ThemeProvider>
        </SessionProvider>
    );
}

export default MyApp;
