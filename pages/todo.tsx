import React, { useState } from 'react'
import Layout from '../components/Layout'

type Tasks = {
    id: number,
    name: string,
}[]

export default function TodoScreen() {
    const now = new Date().toTimeString()

    const [tasks, setTasks] = useState<Tasks>([])
    const [taskName, setTaskName] = useState('')

    const setNewTaskName = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // Append new tasks to spread tasks array.
        setTasks([...tasks, { id: tasks.length, name: taskName, }])
        // Clear current input field.
        setTaskName("")
    }

    const deleteTaskName = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log(e)

    }


    return (
        <Layout title='Todo'>
            <div className='grid content-center'>
                <div className='px-6 pt-12 my-auto grid gap-12'>
                    <div className='card p-8 bg-base-300 w-fit place-self-center'>
                        <h1 className='text-xl text-center mb-2'>
                            Todos
                        </h1>
                        <form
                            onSubmit={setNewTaskName}
                            className='form-control p-6 mb-6'
                        >
                            <label className='label'>
                                <input
                                    className='input'
                                    name='item'
                                    type='text'
                                    value={taskName}
                                    onChange={e => setTaskName(e.target.value)}
                                />
                            </label>
                        </form>
                    </div>

                    {/* <ul> {tasks.map((task) => ( <li key={task.id}> {task.name} </li>))} </ul> */}

                    <div className="overflow-x-auto place-self-center w-[60vw] ">
                        <table className="table table-compact place-self-center w-full ">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Todo</th>
                                    <th>Status</th>
                                    <th>Created On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id}>
                                        <th>{task.id}</th>
                                        <td>{task.name}</td>
                                        <td><input type={'checkbox'} onChange={deleteTaskName} /></td>
                                        <td>{now}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Todo</th>
                                    <th>Status</th>
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

