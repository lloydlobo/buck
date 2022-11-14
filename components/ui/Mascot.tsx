import Image from 'next/image';
import React, { useEffect } from 'react';
import brandName from '../../utils/brandName';
import styles from '../../styles/mascot.module.css';

// https://youtu.be/TGe3pS5LqEw
// https://pixabay.com/illustrations/elephant-animal-cartoon-elephants-3289662/
export function Mascot() {
    const scaleImg = 5;
    const scaleEyePos = {
        x: (-32 * scaleImg) / 100,
        y: (-392 * scaleImg) / 100,
    };

    useEffect(() => {
        const eyes = document.querySelectorAll('#eye');

        const anchor = document.getElementById('anchor');
        if (!anchor) {
            throw new Error('');
        }

        // Draw imaginary box around the mascot.png image.
        const rect = anchor.getBoundingClientRect();
        // Coordinates of image.
        // Get middle of box rect.
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height / 2;

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
            <div className="proximity-hover absolute h-20 w-20 bg-success opacity-20 hover:z-10 hover:scale-150 "></div>
            <div className="relative grid min-h-fit place-items-center transition-transform delay-300 ease-in-out hover:translate-y-8">
                <Image
                    id="anchor"
                    className=""
                    src="/mascot.png"
                    alt={`${brandName}'s mascot image`}
                    width={533 / scaleImg}
                    height={640 / scaleImg}
                />

                <div className="eyes" id={styles['eyes']}>
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
                            left: `${16 + scaleImg * scaleEyePos.x}px`,
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

/*


                    <Image
                        id="eye"
                        className={styles.eye}
                        src="/eye.png"
                        alt={`${brandName}'s mascot's eye`}
                        width={17}
                        height={17}
                        style={{
                            top: `${49 + scale.y}px`,
                            left: `${119 + scale.x}px`,
                        }}
                    />
                    <Image
                        id="eye"
                        className={styles.eye}
                        src="/eye.png"
                        alt={`${brandName}'s mascot's eye`}
                        width={17}
                        height={17}
                        style={{
                            top: `${45 + scale.y}px`,
                            left: `${156 + scale.x}px`,
                        }}
                    />

*/
