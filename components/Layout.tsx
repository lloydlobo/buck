import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import Link from 'next/link'

export default function Layout({ title, children }: {
    title: string,
    children: ReactNode | ReactNode[]
}): JSX.Element {
    const date = new Date().getFullYear()

    return (
        <>
            <Head>
                <title>{title ? title + ' - Bucket' : 'Bucket'}</title>
                <meta name="description" content="Budgeting Envelope App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ToastContainer position="bottom-center" limit={1} />

            <div className='flex min-h-screen flex-col justify-between'>
                <header className='shadow-md'>
                    <nav className='flex h-12 px-4 container mx-auto justify-between items-center'>
                        <Link href={'/'}>
                            <div className='logo text-xl'>
                                bucket
                            </div>
                        </Link>
                        <div className='navlinks flex gap-2'>
                            <Link href={'/login'}>
                                Login
                            </Link>

                            <Link href={'/settings'}>
                                Settings
                            </Link>
                        </div>
                    </nav>
                </header>

                <main className='container m-auto mt-4 px-4'>
                    {children}
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
