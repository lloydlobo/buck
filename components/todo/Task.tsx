import { FaPencilAlt, FaTimes } from "react-icons/fa";
export function Task({ task, onDelete, onEdit }: any) {
  return (
    <>
      <th>{task.name}</th>
      <th>{task.body}</th>
      <th>{task.text}</th>
      <th>{task.isDone ? "Done" : "Todo"}</th>
      <td>{task.date}</td>
      <td>
        <div>
          <p>
            <FaTimes onClick={() => onDelete(task.id)} className="delIcon" />
          </p>
          <p>
            <FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" />
          </p>
        </div>
      </td>
    </>
  );
}
