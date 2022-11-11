import React from 'react'

export type PropsModalForm = {
    task?: any;
    taskName: string;
    setTaskName: React.Dispatch<React.SetStateAction<string>>;
    taskBody: string;
    setTaskBody: React.Dispatch<React.SetStateAction<string>>;
    isError: string;
    handleUpdateTask: (e: any, uuid: string) => Error;
}

export default function TodoModalForm({
    task, taskName, taskBody, setTaskName, setTaskBody, isError, handleUpdateTask,
}: PropsModalForm) {
    return (
        <>
            {/* pencil update/edit icon. */}
            <label htmlFor="my-modal-4" className="btn tooltip btn-sm btn-ghost btn-square" data-tip='Edit'>

                {/* The button to open modal */}
                <div className=''>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                </div>

            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />

            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative grid items-center place-content-center" htmlFor="">

                    <form onSubmit={(e) => handleUpdateTask(e, task.uuid)} className='form-control px-6 mb-6' >
                        <label className='label grid gap-4'>
                            <div>
                                <input
                                    className='input placeholder:opacity-70' name='item-name' type='text' autoFocus
                                    placeholder='Enter a task' value={taskName} onChange={e => setTaskName(e.target.value)}
                                />
                                {isError.length > 0 ? (<div className='text-error text-sm'>{isError}</div>) : ''}
                            </div>

                            <textarea
                                className='textarea textarea-ghost placeholder:opacity-70'
                                name='item-body' placeholder='Update the task'
                                value={taskBody} onChange={e => setTaskBody(e.target.value)}
                            />

                            <button className='btn opacity-50 focus:opacity-70 btn-outline border-neutral-content'>Add</button>
                        </label>
                    </form>
                </label>
            </label>
        </>
    )
}
