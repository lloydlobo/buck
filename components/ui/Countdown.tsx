import React, { useEffect, useRef, useState } from 'react';

export interface Time {
    hour: number;
    minute: number;
    second: number;
}

// Countdown gives you a transition effect of changing numbers.
// You need to change to --value CSS variable using JS. Value must be a number between 0 and 99.
// https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/
export function Countdown(): JSX.Element {
    const Ref = useRef<NodeJS.Timer | null>(null);
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e: string) => {
        const total = Date.parse(e) - Date.parse(new Date() as any);

        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);

        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e: string) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);

        if (total >= 0) {
            setTimer(
                `${hours > 0 ? hours : '0' + hours}:${
                    minutes > 9 ? minutes : '0' + minutes
                }:${seconds > 9 ? seconds : '0' + seconds}`
            );
        } else {
            // TODO: Add logout function prop callback here.
            setTimeout(() => {}, 1000);

            window.location.reload();
        }
    };

    const clearTimer = (e: any) => {
        setTimer('00:00:10');

        if (Ref.current) clearInterval(Ref.current);

        const id = setInterval(() => {
            startTimer(e);
        }, 1000);

        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 3 * 60);

        return deadline;
    };

    const onClickReset = () => clearTimer(getDeadTime());

    useEffect(() => {
        setTimeout(() => {
            onClickReset();
        }, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => { clearTimer(getDeadTime()); });
    // Return JSX.
    return (
        <>
            <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
            <div className="grid auto-cols-max grid-flow-col gap-5 text-center text-xs">
                <div className="flex flex-col">
                    <span className="countdown font-mono">
                        <span style={{ '--value': 15 } as any}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono">
                        <span style={{ '--value': 10 } as any}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono">
                        <span style={{ '--value': 24 } as any}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono">
                        <span style={{ '--value': 48 } as any}></span>
                    </span>
                    sec
                </div>
            </div>
        </>
    );
}
