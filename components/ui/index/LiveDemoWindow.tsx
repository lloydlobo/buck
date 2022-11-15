import Link from 'next/link';
import React from 'react';
import { Mascot } from './Mascot';
import { Window } from './Window';

export default function LiveDemoWindow() {
    return (
        <div className=" relative grid animate-demo">
            <div className="relative z-50 grid translate-y-96 gap-y-4 place-self-center sm:grid-cols-2 sm:gap-x-4">
                <Link className="btn-primary btn btn-xl" href={'/demo'}>
                    Live Demo
                </Link>
                <Link className="btn btn-xl" href={'/docs'}>
                    Read the documentation
                </Link>
            </div>

            <figure className="relative z-10 px-6">
                <Window />

                <div className="absolute -top-24 left-10  ">
                    <Mascot />
                </div>
            </figure>
        </div>
    );
}
