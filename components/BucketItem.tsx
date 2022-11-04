/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

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

            <div className='flex flex-col items-center justify-center p-5'>
                <Link href={`/bucket/${bucket.slug}`}>
                    {/* <a> */}
                    <h2 className='text-lg'>{bucket.name}</h2>
                    {/* </a> */}
                </Link>
                <div className='flex text-xs'>
                    <p className='mb-2'>{bucket.available}</p>
                    <span>&nbsp;/&nbsp;</span>
                    <p className='mb-2'>{bucket.budgeted}</p>
                </div>


                <div className='flex gap-2'>
                    <button className='btn-primary' type='button'>
                        Update
                    </button>
                    <button className='btn-default' type='button'>
                        Consolidate
                    </button>
                </div>
            </div>
        </div>
    )
}
