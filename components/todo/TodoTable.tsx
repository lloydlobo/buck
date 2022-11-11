import { XCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { Task, Tasks } from '../../types';
import TaskActions from './TaskActions';
import TaskInfo from './TaskInfo';
import { PropsTaskStatus, TaskStatus } from './TaskStatus';
import { TodoModalForm, PropsModalForm } from './TodoModalForm';
import TodoTableHead from './TodoTableHead';

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
    let propsModalForm: PropsModalForm = {
        taskName: taskName,
        setTaskName: setTaskName,
        taskBody: taskBody,
        setTaskBody: setTaskBody,
        isError: isError,
        handleUpdateTask: handleUpdateTask,
        task: undefined
    }

    const propsTaskStatus: PropsTaskStatus = { handleTaskStatus: handleTaskStatus, }

    return (
        <table className="w-max table table-compact place-self-center">
            <thead><TodoTableHead /></thead>
            <tbody>
                {tasks.map((task: any) => {
                    return (
                        <tr key={task.uuid} className={`${isTaskComplete && task ? 'line-through' : ''}`}>
                            <td>< TaskStatus {...{ ...propsTaskStatus, task: task }} /></td>
                            <th>{task.name}</th>
                            <td>{task.body}</td>
                            {/* TODO: Pass Modal component here. too much nesting. */}
                            <td><TaskActions {...{ task, propsModalForm, handleDeleteTask }} /></td>
                            <td><TaskInfo{...{ now }} /></td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot className='opacity-0 hover:opacity-100 transition-all duration-500 ease-in'>
                <TodoTableHead />
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

