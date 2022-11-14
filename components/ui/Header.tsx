import React from 'react';
import { Navbar } from '../navbar/Navbar';

export function Header() {
    return (
        <header
            className=" z-30 h-16 w-full justify-center border-b border-base-300 
                        bg-base-100 bg-opacity-70 text-base-content shadow-md 
                        backdrop-blur transition-all duration-100"
        >
            <nav className="w-full bg-opacity-90">
                <Navbar />
            </nav>
        </header>
    );
}
