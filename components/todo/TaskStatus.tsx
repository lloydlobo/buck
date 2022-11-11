import React from 'react'
import { Task } from '../../types'

export type PropsTaskStatus = {
    task?: Task,
    handleTaskStatus: (e: any, uuid: string) => void;
}

export function TaskStatus({ task, handleTaskStatus }: PropsTaskStatus) {
    if (task) {
        return (
            <label className="swap">
                <input
                    type={'checkbox'}
                    onChange={(e) => handleTaskStatus(e, task.uuid)}
                    defaultChecked={task.isDone}
                />
                <div className="swap-on badge-success text-center btn btn-xs">
                    DONE
                </div>
                <div className="swap-off badge-ghost text-center btn btn-xs">
                    TODO
                </div>
            </label>
        )
    }
    return (<span>Task not found!</span>)
}
