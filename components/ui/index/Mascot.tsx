import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import brandName from '../../../utils/brandName';
import styles from '../../../styles/mascot.module.css';

// https://youtu.be/TGe3pS5LqEw
// https://pixabay.com/illustrations/elephant-animal-cartoon-elephants-3289662/
export function Mascot() {
    const scaleImg = 5;
    const scaleEyePos = {
        x: (-40 * scaleImg) / 100,
        y: (-466 * scaleImg) / 100,
    };

    const anchorRef = useRef(null);
    const imageRef = useRef(null);
    const eyesRef = useRef(null);
    const proximityRef = useRef(null);

    useEffect(() => {
        const proxi = proximityRef.current as HTMLElement | null;
        const image = imageRef.current as HTMLElement | null;
        if (!proxi) throw new Error('proxi ref is null');
        if (!image) throw new Error('image ref is null');

        const eyesNodes = eyesRef.current as NodeListOf<Element> | null;
        if (!eyesNodes) throw new Error('anchor id on image is null!');

        // const anchor = document.getElementById('anchor');
        const anchor = anchorRef.current as HTMLElement | null;
        if (!anchor) throw new Error('anchor id on image is null!');
        // Draw imaginary box around the mascot.png image.
        const rect = anchor.getBoundingClientRect();

        // Coordinates of image.
        // Get middle of box rect.
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height / 2;

        const eyes = document.querySelectorAll('#eye');

        proxi.addEventListener('mouseover', (e) => {
            proxi.style.scale = '1.4';
            image.style.transform = 'translateY(30px)';
        });
        proxi.addEventListener('mouseout', (e) => {
            proxi.style.scale = '1';
            image.style.transform = 'translateY(0px)';
        });

        document.addEventListener('mousemove', (e) => {
            // Coordinates of position of mouse.
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const coordinates: Coordinates = {
                mouseX,
                mouseY,
                anchorX,
                anchorY,
            };

            const angleDeg = getAngle(coordinates);

            eyes.forEach((eye) => {
                (eye as HTMLElement).style.transform = `rotate(${
                    90 + angleDeg
                }deg)`;

                // anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
            });
        });
    });

    return (
        <>
            <div
                ref={proximityRef}
                className="proximity-hover absolute -left-3 z-50 h-52 w-52 select-none overflow-hidden rounded-[50%] bg-transparent opacity-20 transition-transform duration-500 hover:scale-150 "
            ></div>
            <div
                ref={imageRef}
                className="relative -z-10 grid min-h-fit place-items-center transition-transform duration-700 ease-in-out"
            >
                <div ref={anchorRef}>
                    <Image
                        id="anchor"
                        className="h-auto w-auto"
                        src="/mascot.png"
                        alt={`${brandName}'s mascot image`}
                        width={533 / scaleImg}
                        height={640 / scaleImg}
                    />
                </div>

                <div className="eyes" ref={eyesRef} id={styles['eyes']}>
                    <Image
                        id="eye"
                        className={styles.eye}
                        src="/eye.png"
                        alt={`${brandName}'s mascot's eye`}
                        width={38 / scaleImg}
                        height={37 / scaleImg}
                        style={{
                            top: `${0 + scaleImg * scaleEyePos.y}px`,
                            left: `${0 + scaleImg * scaleEyePos.x}px`,
                            transform: 'rotate(45deg)',
                        }}
                    />
                    <Image
                        id="eye"
                        className={styles.eye}
                        src="/eye.png"
                        alt={`${brandName}'s mascot's eye`}
                        width={38 / scaleImg}
                        height={37 / scaleImg}
                        style={{
                            top: `${-7 + scaleImg * scaleEyePos.y}px`,
                            left: `${20 + scaleImg * scaleEyePos.x}px`,
                        }}
                    />
                </div>
            </div>
        </>
    );
}

// satisfies Number.
type Coordinates = {
    mouseX: number;
    mouseY: number;
    anchorX: number;
    anchorY: number;
};

function getAngle({ mouseX, mouseY, anchorX, anchorY }: Coordinates): number {
    const dy = anchorY - mouseY;
    const dx = anchorX - mouseX;

    // atan2 expect ray origin to start at 0,0.
    // range (-PI, PI)
    const radian = Math.atan2(dy, dx);
    const degree = (radian * 180) / Math.PI;

    return degree;
}
