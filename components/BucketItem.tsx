/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import BucketOption from './bucket/BucketOption'

export default function BucketItem({ bucket }: { bucket: any }) {
    return (
        <div className='card'>
            <Link href={`/bucket/${bucket.slug}`}>
                {/* <a> */}
                {/* <img */}
                {/*     src={bucket.image} */}
                {/*     alt={bucket.name} */}
                {/*     className='rounded shadow' */}
                {/* /> */}
                {/* </a> */}
            </Link>

            <div className='flex items-center justify-between px-2 py-1 gap-8'>
                <div className='flex items-center px-2 py-1 gap-8'>
                    <Link href={`/bucket/${bucket.slug}`}>
                        {/* <a> */}
                        <p className=''>{bucket.name}</p>
                        {/* </a> */}
                    </Link>

                    <div className='flex opacity-70 tracking-tighter'>
                        <p className=''>{bucket.available}</p>
                        <span>&nbsp;of&nbsp;</span>
                        <p className=''>{bucket.budgeted}</p>
                    </div>
                </div>

                <div className=''>

                    <div className='flex gap-2'>
                        <BucketOption />
                        <button className='btn-primary' type='button'>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
