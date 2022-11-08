import React from 'react'
import { colorProgress } from '../../utils/colorProgress'

export function RadialProgress({ value }: { value: number }) {
    return (
        < div
            className={`${colorProgress(value)} radial-progress text-xs tracking-tighter`}
            style={{ "--value": value, "--size": "2.8rem", "--thickness": "2px", }}
        >
            {value} %
        </ div >
    )
}
