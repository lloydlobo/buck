import React from 'react'

export type PropsForm = {
    taskName: string;
    setTaskName: React.Dispatch<React.SetStateAction<string>>;
    handleCreateNewTaskName: (e: { preventDefault: () => void; }) => Error | undefined; taskBody: string;
    setTaskBody: React.Dispatch<React.SetStateAction<string>>;
    isError: string;
}

export default function TodoForm({ taskName, setTaskName, handleCreateNewTaskName, taskBody, setTaskBody, isError }: PropsForm) {
    return (
        <>
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
        </>
    )
}
