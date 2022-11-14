import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StoreProvider } from '../utils/Store';
import { ThemeProvider } from '../utils/theme-provider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <StoreProvider>
                <Component {...pageProps} />
            </StoreProvider>
        </ThemeProvider>
    );
}

export default MyApp;
