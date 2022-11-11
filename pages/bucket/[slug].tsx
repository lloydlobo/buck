import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Context, useContext } from 'react'

import Layout from '../../components/Layout'
import RadioGroupExample from '../../components/ui/RadioGroup'
import { data } from '../../utils/data/data'
import { Store } from '../../utils/Store'

export default function BucketScreen() {
    const { state, dispatch } = useContext(Store as Context<any>)

    const { query } = useRouter()
    const { slug } = query

    const bucket = data.buckets.find((p: { slug: string | string[] | undefined }) => {
        return p.slug === slug
    })

    if (!bucket) {
        return (
            <Layout title='Product Not Found'>
                <div>Product Not Found</div>
            </Layout>
        )
    }

    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find((x: { slug: string }) => {
            return x.slug === bucket.slug
        })
    }

    return (
        <Layout title={bucket.name}>
            <div className='py-2'>
                <Link href={'/'}>back to buckets</Link>
            </div>


            <div className='grid md:grid-cols-4 md:gap-3'>
                {/* <div className='md:col-span-2'> */}
                {/*     <Image */}
                {/*         src={bucket.image} */}
                {/*         alt={bucket.name} */}
                {/*         width={640} */}
                {/*         height={640} */}
                {/*         layout='responsive' */}
                {/*     /> */}
                {/* </div> */}
                <div>
                    <RadioGroupExample />
                </div>

                <div>
                    <ul>
                        <li>
                            <h1>{bucket.name}</h1>
                        </li>
                        <li>
                            <h1>Category: {bucket.name}</h1>
                        </li>
                        <li>
                            <div>Description: {bucket.description}</div>
                        </li>
                    </ul>
                </div>


                <div className='card p-5'>
                    <div className='mb-2 flex sm:flex-col gap-2 justify-between'>

                        <div>
                            <div>Budgeted</div>
                            <div>{bucket.budgeted}</div>
                        </div>

                        <div>
                            <div>Available</div>
                            <div>{bucket.available}</div>
                        </div>

                        <div>
                            <div>Status</div>
                            <div>
                                {
                                    bucket.budgeted > bucket.available ? (
                                        `${bucket.budgeted - bucket.available} left`
                                    ) : (
                                        'Target reached'
                                    )
                                }
                            </div>
                        </div>

                    </div>
                    <button className='btn-primary w-full'>
                        Update
                    </button>
                </div>
            </div>
        </Layout>
    )
}
