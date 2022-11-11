import { XCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { Tasks } from '../../types';
import TodoModalForm, { PropsModalForm } from './TodoModalForm';

export function TodoTable({
    tasks,
    taskName,
    setTaskName,
    taskBody,
    setTaskBody,
    handleTaskStatus,
    handleUpdateTask,
    handleDeleteTask,
    isTaskComplete,
    isError,
    now
}: PropsTable): JSX.Element {

    const propsModalForm: PropsModalForm = {
        taskName: taskName,
        setTaskName: setTaskName,
        taskBody: taskBody,
        setTaskBody: setTaskBody,
        isError: isError,
        handleUpdateTask: handleUpdateTask,
    }

    return (
        <table className="w-max table table-compact place-self-center">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {tasks.map((task: any) => (
                    <tr key={task.uuid} className={`${isTaskComplete && task ? 'line-through' : ''}`}>
                        <td>
                            <label className="swap">
                                <input type={'checkbox'} onChange={(e) => handleTaskStatus(e, task.uuid)} defaultChecked={task.isDone} />
                                <div className="swap-on badge-success text-center btn btn-xs">DONE</div>
                                <div className="swap-off badge-ghost text-center btn btn-xs">TODO</div>
                            </label>
                        </td>
                        <th>{task.name}</th>
                        <td>{task.body}</td>
                        <td>
                            <div className='flex gap-2'>
                                <button id={task.name} onClick={(e) => handleDeleteTask(e, task.uuid)} className='btn btn-xs btn-square btn-ghost' >
                                    <XCircleIcon className="h-6 w-6"></XCircleIcon>
                                </button>

                                <TodoModalForm {...propsModalForm} />
                            </div>
                        </td>
                        <td>
                            <div data-tip={now} className='tooltip cursor-help tooltip-left btn-xs btn-square btn-ghost items-center grid' >
                                {/* info icon for timestamp */}
                                <div className='opacity-40'>
                                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>

            <tfoot className='opacity-0 hover:opacity-100 transition-all duration-500 ease-in'>
                <tr>
                    <th>Status</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </tfoot>

        </table>
    )
}

export type PropsTable = {
    tasks: Tasks;
    taskName: string;
    setTaskName: React.Dispatch<React.SetStateAction<string>>;
    taskBody: string;
    setTaskBody: React.Dispatch<React.SetStateAction<string>>;
    handleTaskStatus: (e: any, uuid: string) => void;
    handleCreateNewTaskName: (e: { preventDefault: () => void; }) => Error | undefined;
    handleUpdateTask: (e: any, uuid: string) => Error;
    handleDeleteTask: (e: any, uuid: string) => void;
    isTaskComplete: boolean;
    isError: string;
    now: string;
}

