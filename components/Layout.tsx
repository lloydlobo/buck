import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeToggle } from './ui/ThemeToggler'
import { ThemeContext } from '../utils/theme-context'
import { Navbar } from './navbar/Navbar'
import Drawer from './navbar/Drawer'
import { Footer } from './ui/Footer'
import SidebarRight from './navbar/SidebarRight'
import NavbarTailwind from './navbar/NavbarTailwind'


export default function Layout({ title, children }: {
    title: string,
    children: ReactNode | ReactNode[]
}): JSX.Element {
    const date = new Date().getFullYear()
    const { theme, toggle, dark } = useContext(ThemeContext)

    return (
        <>
            <Head>
                <title>{title ? title + ' - Bucket' : 'Bucket'}</title>
                <meta name="description" content="Budgeting Envelope App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Drawer>
                <ToastContainer position="bottom-center" limit={1} />
                <div
                    // style={{ backgroundColor: theme.backgroundColor, color: theme.color, }}
                    className='wrapper h-screen'
                >
                    {/* <header className='sticky top-0 z-30 w-full bg-base-100 shadow-md h-16 justify-center bg-opacity-70 border-b border-base-300 transition-all duration-100 backdrop-blur text-base-content'> */}
                    <header className=' z-30 w-full bg-base-100 shadow-md h-16 justify-center 
                        bg-opacity-70 border-b border-base-300 transition-all 
                        duration-100 backdrop-blur text-base-content'>
                        <nav className='w-full bg-opacity-90'>
                            <Navbar />
                        </nav>
                    </header>

                    <main key={title} className=''>
                        {children}
                    </main>

                    <Footer />
                </div>
            </Drawer>
        </>
    )
}
/**  
* localTheme()
*
* The class strategy can be used to support both the 
* user’s system preference or a manually selected mode 
* by using the Window.matchMedia() API. 
*/
// https://tailwindcss.com/docs/dark-mode
function localTheme() {
    const isLocalThemeDark = localStorage.theme === 'dark'
    const isDarkWindowMedia = (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (isLocalThemeDark || isDarkWindowMedia) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'
    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
function matchMedia() {
    let mql = window.matchMedia('(max-width: 600px)');
    // <span class="mq-value"></span>
    const targetElement = document.querySelector(".mq-value") as HTMLSpanElement | null
    if (!targetElement) {
        return
    }
    targetElement.innerText = (mql.matches as unknown) as string;
}
