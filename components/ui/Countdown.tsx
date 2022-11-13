import React, { useEffect, useRef, useState } from 'react';

export interface Time {
    hour: number;
    minute: number;
    second: number;
}

const constructTime = (total: number) => {
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return { hours, minutes, seconds };
};

// Countdown gives you a transition effect of changing numbers.
// You need to change to --value CSS variable using JS. Value must be a number between 0 and 99.
// https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/
export function Countdown({
    sessionTime: SESSION_TIME_SEC = 3 * 60,
}: {
    sessionTime: number;
}): JSX.Element {
    const Ref = useRef<NodeJS.Timer | null>(null);
    const [timer, setTimer] = useState('00:00:00');

    const RefObject = useRef<NodeJS.Timer | null>(null);
    const [timerObject, setTimerObject] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const getTimeRemaining = (e: string) => {
        const total = Date.parse(e) - Date.parse(new Date() as any);
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return { total, hours, minutes, seconds };
    };

    const startTimer = (e: string) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            // update the timer check if less than 10 then,
            // add '0' at the beginning of the variable
            setTimer(
                `${hours > 0 ? hours : '0' + hours}:${
                    minutes > 9 ? minutes : '0' + minutes
                }:${seconds > 9 ? seconds : '0' + seconds}`
            );

            setTimerObject({
                hours: hours > 0 ? hours : 0 + hours,
                minutes: minutes > 9 ? minutes : 0 + minutes,
                seconds: seconds > 9 ? seconds : 0 + seconds,
            });
        } else {
            // TODO: Add logout function prop callback here.
            setTimeout(() => {}, 1000);
            // TODO: add clear timer here.
            window.location.reload();
        }
    };

    const clearTimer = (e: any) => {
        setTimer('00:00:10');
        const total = Date.parse(e) - Date.parse(new Date() as any);
        const { hours, minutes, seconds } = constructTime(total);
        setTimerObject({ hours, minutes, seconds });

        if (Ref.current) clearInterval(Ref.current);

        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + SESSION_TIME_SEC);
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
            <h3>
                {timerObject.hours}h {timerObject.minutes}m{' '}
                {timerObject.seconds}s
            </h3>
            <button onClick={onClickReset}>Reset</button>
            <div className="grid auto-cols-max grid-flow-col gap-5 text-center text-xs">
                <div className="hidden flex-col">
                    <span className="countdown font-mono">
                        <span
                            style={{ '--value': timerObject.hours } as any}
                        ></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono">
                        <span
                            style={{ '--value': timerObject.hours } as any}
                        ></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono">
                        <span
                            style={{ '--value': timerObject.minutes } as any}
                        ></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono">
                        <span
                            style={{ '--value': timerObject.seconds } as any}
                        ></span>
                    </span>
                    sec
                </div>
            </div>
        </>
    );
}
