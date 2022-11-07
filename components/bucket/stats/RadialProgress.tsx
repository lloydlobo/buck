import React from 'react'
import { colorProgress } from '../../utils/colorProgress'

export function RadialProgress({ value }: { value: number }) {
    return (
        < div
            className={`${colorProgress(value)} radial-progress text-sm tracking-tighter`}
            style={{ "--value": value, "--size": "3.2rem", "--thickness": "4px", }}
        >
            {value} %
        </ div >
    )
}
