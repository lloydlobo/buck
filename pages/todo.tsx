import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Layout from '../components/Layout'
import TodoForm, { PropsForm } from '../components/todo/TodoForm';
import { TodoTable, PropsTable } from '../components/todo/TodoTable';
import { Tasks } from '../types';
import { todoData } from '../utils/data/todo';

// https://www.educative.io/blog/react-hooks-tutorial-todo-list
export default function TodoScreen() {
    const today = new Date().toDateString()
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })
    const now = `${today} ${time}`

    const [tasks, setTasks] = useState<Tasks>(todoData)
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
        setTasks([...tasks, { id: tasks.length, uuid: uuidv4(), name: taskName, body: taskBody, isDone: isTaskComplete },])

        // Clear current input field.
        setTaskName("")
        setTaskBody("")
        setError('')
    }

    // The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
    const handleDeleteTask = (e: any, uuid: string) => {
        e.preventDefault()
        // Delete selected task from tasks array.
        const tasksFiltered = tasks.filter((task) => task.uuid !== uuid)

        setTasks([...tasksFiltered,])
    }

    const handleTaskStatus = (e: any, uuid: string) => {
        // setIsTaskDone(!isTaskDone)
        tasks.filter((task) => task.uuid === uuid).map(task => task.isDone = !task.isDone)
    }

    // TODO: Find a way to feed the modal input with data of the task to be updated.
    // FIX: Why is it refreshing when submitted?
    const handleUpdateTask = (e: any, uuid: string) => {
        e.preventDefault()
        // Declare Backup task variable.
        let taskBackup;

        // Delete selected task from tasks array.
        const tasksFiltered = tasks.filter((task) => {
            const toUpdate = task.uuid === uuid
            if (toUpdate) {
                if (task.name === taskName || task.body === taskBody || task.isDone === isTaskComplete) { }
                // Copy to Backup task variable.
                taskBackup = { name: taskName, id: task.id, uuid: uuid, body: taskBody, isDone: isTaskComplete, }
                setTasks([...tasks, taskBackup])
                setTaskName("")
                setTaskBody("")
                setError('')
            }
            return !toUpdate
        })

        // Create new entry with same id.
        if (taskBackup) {
            setTasks([...tasksFiltered, taskBackup])
        }

        return Error('Failed to backup task.')
    }

    const propsForm: PropsForm = {
        taskName: taskName,
        setTaskName: setTaskName,
        handleCreateNewTaskName: handleCreateNewTaskName,
        taskBody: taskBody,
        setTaskBody: setTaskBody,
        isError: isError,
    }

    const propsTable: PropsTable = {
        tasks: tasks,
        taskName: taskName,
        setTaskName: setTaskName,
        taskBody: taskBody,
        setTaskBody: setTaskBody,
        handleTaskStatus: handleTaskStatus,
        handleCreateNewTaskName: handleCreateNewTaskName,
        handleUpdateTask: handleUpdateTask,
        handleDeleteTask: handleDeleteTask,
        isTaskComplete: isTaskComplete,
        isError: isError,
        now: now,
    }

    return (
        <Layout title='Todo'>
            <div className='px-6 pt-12 my-auto grid gap-12'>
                <div className='card p-8 bg-base-300 w-fit place-self-center'>
                    <h1 className='text-xl text-center mb-6'> Todos </h1>
                    <TodoForm {...propsForm} />
                </div>
                <div className="overflow-x-auto place-self-center w-fit">
                    <TodoTable {...propsTable} />
                </div>
            </div>
        </Layout >
    )
}
