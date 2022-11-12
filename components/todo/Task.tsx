import { FaPencilAlt, FaTimes } from 'react-icons/fa';

export function Task({ task, onDelete, onEdit }: any) {
    return (
        <>
            <th>{task.isDone ? 'Done' : 'Todo'}</th>
            <th>{task.text}</th>
            <td>{task.day}</td>
            <td>
                <div className="flex">
                    <button className="btn-ghost btn-xs btn-circle btn">
                        <FaTimes
                            onClick={() => onDelete(task.id)}
                            className="delIcon"
                        />
                    </button>
                    <button className="ring-sh btn-ghost btn-xs btn-circle btn z-50 border-none ring-neutral-content ring-offset-8 ring-offset-base-100 hover:bg-transparent hover:ring-1">
                        <FaPencilAlt
                            onClick={() => onEdit(task.id)}
                            className="editIcon"
                        />
                    </button>
                </div>
            </td>
            <th>{task.body}</th>
        </>
    );
}
