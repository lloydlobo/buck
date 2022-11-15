import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StoreProvider } from '../utils/Store';
import { ThemeProvider } from '../utils/theme-provider';

import { Inter } from '@next/font/google';

// https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <StoreProvider>
                <div className={`${inter.variable} font-sans`}>
                    <Component {...pageProps} />
                </div>
            </StoreProvider>
        </ThemeProvider>
    );
}

export default MyApp;
