import Image from 'next/image';
import React from 'react';

export function Window() {
    return (
        <>
            <div className="mockup-window relative h-auto rounded-2xl border-4 border-gray-800 bg-base-300 shadow-2xl">
                <div className="flex h-[500px] justify-center bg-base-200 opacity-60 bg-blend-overlay blur-[0.6px] brightness-95">
                    <Image
                        src={'/window-demo.png'}
                        alt=""
                        className="object-cover"
                        width={1024}
                        height={667}
                    />
                </div>
            </div>
        </>
    );
}
