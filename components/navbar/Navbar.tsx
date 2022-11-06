import Link from 'next/link'
import React from 'react'


export const Navbar = () => {
    return (
        <div className='p-4'>
            <div>
                <Link href='/accounts'>
                    Accounts
                </Link>
            </div>
            <div className='active'>
                <Link href='/accounts'>
                    Buckets
                </Link>
            </div>
            <div>
                <Link href='/accounts'>
                    Budget
                </Link>
            </div>
        </div>
    )
}

