import React from "react";
import { TaskType as TaskType, TasksType } from "../../types";
import { Task } from "./Task";
import TaskActions from "./TaskActions";
import TaskInfo from "./TaskInfo";
import { PropsTaskStatus, TaskStatus } from "./TaskStatus";
import { TodoModalForm, PropsModalForm } from "./TodoModalForm";
import TodoTableHead from "./TodoTableHead";

export type TasksProps = {
  tasks: TaskType[];
  onDelete: any;
  onEdit: any;
};

export function Tasks({ tasks, onDelete, onEdit }: TasksProps): JSX.Element {
  return (
    <table className="table-compact table w-max border-separate border-spacing-1 place-self-center">
      <thead>
        <TodoTableHead />
      </thead>
      <tbody>
        {tasks.map((task: any) => (
          <tr id={task.id + "-" + task.uuid} key={task.id}>
            <Task task={task} onEdit={onEdit} onDelete={onDelete} />
          </tr>
        ))}
      </tbody>
      <tfoot className="className=opacity-0 transition-all duration-500 ease-in hover:opacity-100">
        <TodoTableHead />
      </tfoot>
    </table>
  );
}
