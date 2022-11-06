import React, { ReactNode } from 'react'

export default function Drawer({ children }: { children: ReactNode | ReactNode[] }) {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle fixed top-0" />
            {/* flex flex-col items-center justify-center */}
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}
