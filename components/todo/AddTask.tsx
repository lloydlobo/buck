import React, { useState } from 'react'
import Swal from 'sweetalert2'

// https://github.com/Lexitar32/Task-Tracker-App-with-React.js/blob/master/src/components/AddTask.js
export function AddTask({ onSave }: any): JSX.Element {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()

        // Handle unfilled fields with errors.
        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill fields task and date or close the form!',
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill task field!',
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill task date!',
            })
        } else {
            // Save input.
            onSave({ text, day })
        }
        // Clear state variables values.
        setText('')
        setDay('')
    }

    return (
        <form
            onSubmit={onSubmit}
            className="add-form prose-sm mb-6 gap-2 caret-pink-500 focus:caret-pink-400"
        >
            <div className="form-control">
                <label className="label">Task</label>
                <input
                    type="text"
                    className="input border-2 placeholder:opacity-60 focus:border-pink-400"
                    name="item-name"
                    autoFocus
                    placeholder="Add a task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {/* {isError.length > 0 ? ( <div className='text-error text-sm'>{isError}</div>) : ''} */}
            </div>

            <div className="form-control">
                <label className="label">Due Date</label>
                <input
                    type="text"
                    name="item-due-date"
                    placeholder="Add due date"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="input border-2 placeholder:opacity-60 focus:border-pink-400"
                />{' '}
                {/* <textarea name='item-body' placeholder='Describe the task' value={taskBody} onChange={e => setTaskBody(e.target.value)} className='textarea textarea-ghost placeholder:opacity-70' /> */}
            </div>

            <input
                type="submit"
                value="Save Task"
                className="btn-ghost  glass btn mt-4 
                backdrop-blur-3xl backdrop-brightness-0 backdrop-filter "
            />
        </form>
    )
}
