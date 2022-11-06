import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode, useContext } from 'react'

import { ToastContainer } from 'react-toastify'

import { ThemeToggle } from './ui/ThemeToggler'
import { ThemeContext } from '../utils/theme-context'
import { Navbar } from './navbar/Navbar'
import Drawer from './navbar/Drawer'


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

            <ToastContainer position="bottom-center" limit={1} />

            <div
                className='wrapper min-h-screen'
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                }}
            >
                <header className='shadow-md border-b border-base-300'>
                    <nav className='flex h-12 px-4 mx-auto justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <label
                                htmlFor="my-drawer-2"
                                className="drawer-button text-xs lg:hidden hover:text-neutral-content cursor-pointer focus-within::text-neutral-content"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                            <Link href={'/'}>
                                <div className='logo text-xl'>
                                    bucket
                                </div>
                            </Link>
                        </div>
                        <div className='navlinks flex gap-2 items-center'>
                            {/* <button data-set-theme="" data-act-class="ACTIVECLASS"></button> */}
                            {/* <button data-set-theme="dark" data-act-class="ACTIVECLASS">dark</button> */}
                            {/* <button data-set-theme="pink" data-act-class="ACTIVECLASS">pink</button> */}
                            {/* <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Toggle</button> */}
                            {/* <button */}
                            {/*     className='btn-default rounded-full' */}
                            {/*     onClick={() => toggle()} // theme === themes.light */}
                            {/* > */}
                            {/*     {!dark ? "Dark" : "Light"} */}
                            {/* </button> */}
                            {/* <ThemeToggle /> */}
                            <Link href={'/login'}>
                                Login
                            </Link>

                            <Link href={'/settings'}>
                                Settings
                            </Link>
                        </div>
                    </nav>
                </header>

                {/* <aside className='min-h-screen border-r bg-base-200 border-base-100'> */}
                {/*     <div className='px-2'> */}
                {/*         <div className='border-base-100 border-b'> */}
                {/*             <Navbar /> */}
                {/*         </div> */}
                {/*     </div> */}
                {/* </aside> */}


                <main className='container'>
                    <Drawer>
                        <div className='p-4'>
                            {children}
                        </div>
                    </Drawer>
                </main>

                <footer className='container mx-auto shadow-inner'>
                    <div className='flex text-sm h-10 px-4 container mx-auto justify-between items-center'>
                        Copyright &copy; {date} Bucket
                    </div>
                </footer>
            </div>
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
