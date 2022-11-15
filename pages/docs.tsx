import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const linksData = [
    {
        page: 'api',
        url: '/api',
        endpoints: [
            { page: 'seed', url: '/api/seed' },
            { page: 'hello', url: '/api/hello' },
        ],
    },
    {
        page: 'todo',
        url: '/todo',
        endpoints: [{ page: '', url: '/todo' }],
    },
];
export default function DocsPage() {
    const [links, setLinks] = useState(linksData);

    useEffect(() => {
        setLinks(links);
    }, [links]);

    return (
        <>
            <Layout title={'Documentation'}>
                <div className="mt-8 grid ">
                    <>
                        <div className=" mb-6 grid  animate-demo grid-cols-4 items-center gap-6 p-8  ">
                            {links.map((link, index) => {
                                return (
                                    <>
                                        <div
                                            key={link.page + index}
                                            className="mb-6 grid h-full w-full gap-2 place-self-center bg-base-300 px-8 py-4 text-start  shadow-md backdrop-blur-xl delay-75 duration-300 ease-out hover:shadow-lg "
                                        >
                                            <h2 className="link-hover text-4xl font-light opacity-80 hover:text-success hover:opacity-100">
                                                <Link href={link.url}>
                                                    /{link.page}
                                                </Link>
                                            </h2>
                                            <ul className="w-full opacity-60">
                                                {link.endpoints.map(
                                                    (x, idx) => {
                                                        return (
                                                            <li
                                                                key={
                                                                    x.url + idx
                                                                }
                                                                className="btn-ghost btn-link link btn-lg btn font-semibold lowercase text-neutral-content underline-offset-2 hover:text-pink-400 hover:opacity-100 hover:brightness-110"
                                                            >
                                                                <Link
                                                                    href={x.url}
                                                                >
                                                                    .../{x.page}
                                                                </Link>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </>
                </div>
            </Layout>
        </>
    );
}
