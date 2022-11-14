import React from 'react';
import { AddTask } from './AddTask';

export type PropsForm = {
    taskName: string;
    setTaskName: React.Dispatch<React.SetStateAction<string>>;
    handleCreateNewTaskName: (e: {
        preventDefault: () => void;
    }) => Error | undefined;
    taskBody: string;
    setTaskBody: React.Dispatch<React.SetStateAction<string>>;
    isError: string;
};

export default function TodoForm({
    taskName,
    setTaskName,
    handleCreateNewTaskName,
    taskBody,
    setTaskBody,
    isError,
}: PropsForm) {
    return (
        <>
            <div className="w-96">
                <AddTask />
                <form
                    onSubmit={handleCreateNewTaskName}
                    className="form-control mb-3 hidden px-3"
                >
                    <label className="label grid gap-2">
                        <div>
                            <input
                                className="input placeholder:opacity-70"
                                name="item-name"
                                type="text"
                                placeholder="Enter a task"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                autoFocus
                            />
                            {isError.length > 0 ? (
                                <div className="text-sm text-error">
                                    {isError}
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <textarea
                            className="textarea-ghost textarea placeholder:opacity-70"
                            name="item-body"
                            placeholder="Describe the task"
                            value={taskBody}
                            onChange={(e) => setTaskBody(e.target.value)}
                        />
                        <button className="btn-outline btn border-neutral-content opacity-50 focus:opacity-70">
                            Add
                        </button>
                    </label>
                </form>
            </div>
        </>
    );
}
