import { XCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { TodoModalForm } from './TodoModalForm'

export default function TaskActions({ task, propsModalForm, handleDeleteTask }: any) {
    return (
        <div className='flex gap-2'>
            <button
                id={task.name}
                className='btn btn-xs btn-square btn-ghost'
                onClick={(e) => handleDeleteTask(e, task.uuid)}
            >
                <XCircleIcon className="h-6 w-6" />
            </button>
            <TodoModalForm {...propsModalForm} />
        </div>
    )
}
