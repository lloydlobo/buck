import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Context, useContext } from 'react';

import Layout from '../../components/Layout';
import RadioGroupExample from '../../components/ui/RadioGroup';
import { data } from '../../utils/data/data';
import { Store } from '../../utils/Store';

export default function BucketScreen() {
    const { state, dispatch } = useContext(Store as Context<any>);

    const { query } = useRouter();
    const { slug } = query;

    const category = data.category.find(
        (p: { slug: string | string[] | undefined }) => {
            return p.slug === slug;
        }
    );

    if (!category) {
        return (
            <Layout title="Category not found">
                <div>Category not found</div>
            </Layout>
        );
    }

    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find((x: { slug: string }) => {
            return x.slug === category.slug;
        });
    };

    return (
        <Layout title={category.name}>
            <div className="py-2">
                <Link href={'/'}>back to buckets</Link>
            </div>

            <div className="grid md:grid-cols-4 md:gap-3">
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
                            <h1>{category.name}</h1>
                        </li>
                        <li>
                            <h1>Category: {category.name}</h1>
                        </li>
                        <li>
                            <div>Description: {category.description}</div>
                        </li>
                    </ul>
                </div>

                <div className="card p-5">
                    <div className="mb-2 flex justify-between gap-2 sm:flex-col">
                        <div>
                            <div>Budgeted</div>
                            <div>{category.budgeted}</div>
                        </div>

                        <div>
                            <div>Available</div>
                            <div>{category.available}</div>
                        </div>

                        <div>
                            <div>Status</div>
                            <div>
                                {category.budgeted > category.available
                                    ? `${
                                          category.budgeted - category.available
                                      } left`
                                    : 'Target reached'}
                            </div>
                        </div>
                    </div>
                    <button className="btn-primary w-full">Update</button>
                </div>
            </div>
        </Layout>
    );
}
