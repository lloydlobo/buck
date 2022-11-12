import React from "react";
import { TaskType } from "../../types";

export type PropsTaskStatus = {
  task?: TaskType;
  handleTaskStatus: (e: any, uuid: string) => void;
};

export function TaskStatus({ task, handleTaskStatus }: PropsTaskStatus) {
  if (task) {
    return (
      <label className="swap">
        <input
          type={"checkbox"}
          onChange={(e) => handleTaskStatus(e, task.uuid)}
          defaultChecked={task.isDone}
        />
        <div className="badge-success swap-on btn-xs btn text-center">DONE</div>
        <div className="badge-ghost swap-off btn-xs btn text-center">TODO</div>
      </label>
    );
  }
  return <span>Task not found!</span>;
}
