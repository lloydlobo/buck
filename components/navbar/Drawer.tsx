import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { MenuItems } from '../../utils/menuItems'
import SearchInput from '../SearchInput'

export default function Drawer({ children }: { children: ReactNode | ReactNode[] }) {
    const router = useRouter()
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox"
                className="drawer-toggle" />
            <div
                className="drawer-content">
                {/* <!-- Page content here --> */}
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                {children}
            </div>
            <div className="drawer-side w-52 text-sm">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <label htmlFor="my-drawer-2" className="hidden absolute left-3 top-2 btn btn-circle btn-ghost swap swap-rotate md:hidden ">
                        {/* <!-- this hidden checkbox controls the state --> */}
                        <input type="checkbox" />
                        {/* <!-- hamburger icon --> */}
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        {/* <!-- close icon --> */}
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </label>

                    <li className='' ><SearchInput /></li>
                    {MenuItems.map((item, index) => {
                        console.log(item.url)
                        return (
                            <li className={` ${router.asPath === item.url
                                ? "text-success bg-base-100"
                                : "text-neutral-content"
                                }`}>
                                <Link href={item.url} key={index}>
                                    <div
                                        className={` ${router.asPath === item.url
                                            ? "text-success font-bold"
                                            : "text-neutral-content"
                                            }`}
                                    >
                                        <div className=" hover:text-primary-500 w-10 mx-auto pb-2">{/* {item.icon} */}</div>
                                        <p className="text-secondary-300">{item.label}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}


/*
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle fixed top-0" />
            <div className="drawer-content ">
                {children}
            </div>

            <div className="drawer-side"
                style={{
                    scrollBehavior: 'smooth',
                    scrollPaddingTop: '5rem',
                }}
            >
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu w-70 bg-base-200 text-base-content">
                    <li ><SearchInput /></li>
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
*/
