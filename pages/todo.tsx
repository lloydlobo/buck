import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; // uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
import Layout from '../components/Layout'
import { XCircleIcon } from '@heroicons/react/solid';

export default function TodoScreen() {
    // NOTE: use use state?
    const today = new Date().toDateString()
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })
    const now = `${today} ${time}`


    const [tasks, setTasks] = useState<Tasks>([...data])
    const [taskName, setTaskName] = useState('')
    const [taskBody, setTaskBody] = useState('')
    const [isError, setError] = useState('')
    const [isTaskComplete, setTaskComplete] = useState(false)

    const handleCreateNewTaskName = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (taskName === '') {
            setError('Task is required!')
            return Error(isError)
        }
        // Append new tasks to spread tasks array.
        setTasks([
            ...tasks,
            { id: tasks.length, uuid: uuidv4(), name: taskName, body: taskBody, isDone: isTaskComplete },
        ])
        // Clear current input field.
        setTaskName("")
        setTaskBody("")
        setError('')
    }

    const handleDeleteTaskName = (e: any, uuid: string) => {
        e.preventDefault()
        // Delete selected task from tasks array.
        const tasksFiltered = tasks.filter((task) => task.uuid !== uuid)
        setTasks([...tasksFiltered,])
    }

    const handleCompleteTask = (e: any, uuid: string) => {
        e.preventDefault()
        // setIsTaskDone(!isTaskDone)
        tasks.filter((task) => task.uuid === uuid).map(task => task.isDone = !task.isDone)

    }
    // if (task.uuid === uuid) {
    //     // setTasks([
    //     //     ...tasks,
    //     //     { id: task.id, uuid: task.uuid, name: task.name, body: task.body, isDone: !task.isDone },
    //     // ])
    // }

    // Pre - rendering as static.
    // useEffect(() => {
    //     setTasks([...data])
    // })

    return (
        <Layout title='Todo'>
            <div className='grid content-center'>
                <div className='px-6 pt-12 my-auto grid gap-12'>
                    <div className='card p-8 bg-base-300 w-fit place-self-center'>
                        <h1 className='text-xl text-center mb-6'>
                            Todos
                        </h1>
                        <form
                            onSubmit={handleCreateNewTaskName}
                            className='form-control px-6 mb-6'
                        >
                            <label className='label grid gap-4'>
                                <div>
                                    <input
                                        className='input placeholder:opacity-70'
                                        name='item-name'
                                        type='text'
                                        placeholder='Enter a task'
                                        value={taskName}
                                        onChange={e => setTaskName(e.target.value)}
                                        autoFocus
                                    />
                                    {isError.length > 0 ? (
                                        <div className='text-error text-sm'>{isError}</div>
                                    ) : ''}
                                </div>
                                <textarea
                                    className='textarea textarea-ghost placeholder:opacity-70'
                                    name='item-body'
                                    placeholder='Describe the task'
                                    value={taskBody}
                                    onChange={e => setTaskBody(e.target.value)}
                                />

                                <button
                                    className='btn opacity-50 focus:opacity-70 btn-outline border-neutral-content'
                                >
                                    Add
                                </button>
                            </label>
                        </form>
                    </div>

                    <div className="overflow-x-auto place-self-center w-fit">
                        <table className="w-max table table-compact place-self-center">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Action</th>
                                    <th>Todo</th>
                                    <th>Description</th>
                                    <th>Created On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.uuid} className={`${isTaskComplete && task ? 'line-through' : ''}`}>
                                        <th>{task.id}</th>
                                        <td>
                                            <div className='flex gap-2'>
                                                {/* done action */}
                                                <input
                                                    type={'checkbox'}
                                                    onChange={(e) => handleCompleteTask(e, task.uuid as string)}
                                                    defaultChecked={task.isDone}
                                                />
                                                {/* delete task action */}
                                                <button
                                                    id={task.name}
                                                    onClick={(e) => handleDeleteTaskName(e, task.uuid as string)}
                                                    className='btn btn-xs btn-square btn-ghost'
                                                >
                                                    <XCircleIcon className="h-5 w-5"></XCircleIcon>
                                                </button>
                                            </div>
                                        </td>
                                        <td>{task.name}</td>
                                        <td>{task.body}</td>
                                        <td>{now}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className='opacity-0 hover:opacity-100 transition-all duration-500 ease-in'>
                                <tr>
                                    <th>Id</th>
                                    <th>Action</th>
                                    <th>Todo</th>
                                    <th>Description</th>
                                    <th>Created on</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </Layout >
    )

}

type Tasks = {
    id: number,
    uuid: string,
    name: string,
    body: string,
    isDone: boolean,
}[]


const data: Tasks = [
    {
        id: 1,
        uuid: uuidv4(),
        name: 'Done',
        body: 'Check the box to mark done',
        isDone: false,
    },
    {
        id: 2,
        uuid: uuidv4(),
        name: 'Delete',
        body: 'Click X to delete task.',
        isDone: false,
    },
    {
        id: 3,
        uuid: uuidv4(),
        name: 'Hide',
        body: 'Click - to hide task.',
        isDone: false,
    },
]


