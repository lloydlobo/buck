import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import Layout from "../components/Layout";
import { AddTask } from "../components/todo/AddTask";
import { Tasks } from "../components/todo/Tasks";
import { PropsForm } from "../components/todo/TodoForm";
import { PropsTable, TodoTable } from "../components/todo/TodoTable";
import { TasksType, TaskType } from "../types";
import { todoData } from "../utils/data/todo";

// https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage
// https://www.educative.io/blog/react-hooks-tutorial-todo-list
export default function TodoScreen() {
  const today = new Date().toDateString();
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const now = `${today} ${time}`;

  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<TaskType[]>(todoData);

  const [taskName, setTaskName] = useState("");
  const [taskBody, setTaskBody] = useState("");
  const [isError, setError] = useState("");
  const [isTaskComplete, setTaskComplete] = useState(false);

  // Pre-loader mimics API calls.
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  let getTasks: TaskType[] = [];
  let item: string | null = "";
  if (typeof window !== "undefined") {
    item = localStorage.getItem("taskAdded");
    !item
      ? console.log("taskAdded not found in localStorage!")
      : (getTasks = JSON.parse(item));
  }

  useEffect(() => {
    getTasks == null || getTasks.length === 0
      ? setTasks([
          {
            id: 1,
            uuid: "s",
            name: "Task 1",
            body: "Sample task",
            isDone: false,
          },
        ])
      : setTasks(getTasks);

    // eslint-disable-next-line
  }, []);

  // Add Task.
  const addTask = (task: any) => {
    const id = uuidv4();
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);

    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfuly added a new task!",
    });
  };

  // Edit Task.
  const editTask = (id: TaskType["id"]) => {
    const text = prompt("Task name");
    const day = prompt("Day and Time");
    let data;
    if (typeof window !== "undefined") {
      const localItem = localStorage.getItem("taskAdded");
      !localItem
        ? console.log("taskAdded not found in localStorage!")
        : (data = JSON.parse(localItem));
    }

    let myData;
    if (!data) {
      console.error("Could not parse taskAdded of localstorage to JSON.");
    } else {
      myData = data.map((x: TaskType) => {
        if (x.id === id) {
          return { ...x, text: text, day: day, id: uuidv4() };
        }
        return x;
      });
    }

    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "Edited existing task successfully!",
    });

    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();
  };

  // Delete task.
  const deleteTask = (id: TaskType["id"]) => {
    const deleteTask = tasks.filter((task) => task.id !== id);

    setTasks(deleteTask);

    Swal.fire({
      icon: "success",
      title: "Oops...",
      text: "Deleted the task successfully!",
    });
  };

  return (
    <Layout title="Todo">
      {loading ? (
        <div className="stat font-bold">Loading...</div>
      ) : (
        <div className="my-auto grid gap-12 px-6 pt-12">
          <div
            className="aspect-auto card card-compact h-full w-max place-content-center place-self-center bg-base-300 px-6 pt-4 shadow-xl"
            style={{ display: "grid" }}
          >
            <div className="card-body pt-6">
              <h1 className="card-title opacity-50 shadow-inner">Todos</h1>
              <div className="card-actions">
                <AddTask onSave={addTask} />
                {/* <TodoForm {...propsForm} /> */}
              </div>
            </div>
          </div>

          <div className="w-fit place-self-center overflow-x-auto">
            {/*Task Counter */}
            {tasks.length > 0 ? (
              <Tasks tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
            ) : (
              "No Task Found!"
            )}
            {/* <TodoTable {...propsTable} /> */}
          </div>
        </div>
      )}
    </Layout>
  );
}

/*
 * ARCHIVE
  // //////////////////////////////////////////////////

  const handleCreateNewTaskName = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (taskName === "") {
      setError("Task is required!");
      return Error(isError);
    }

    // Append new tasks to spread tasks array.
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        uuid: uuidv4(),
        name: taskName,
        body: taskBody,
        isDone: isTaskComplete,
      },
    ]);

    // Clear current input field.
    setTaskName("");
    setTaskBody("");
    setError("");
  };

  // The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  const handleDeleteTask = (e: any, uuid: string) => {
    e.preventDefault();
    // Delete selected task from tasks array.
    const tasksFiltered = tasks.filter((task) => task.uuid !== uuid);

    setTasks([...tasksFiltered]);
  };

  const handleTaskStatus = (e: any, uuid: string) => {
    // setIsTaskDone(!isTaskDone)
    tasks
      .filter((task) => task.uuid === uuid)
      .map((task) => (task.isDone = !task.isDone));
  };

  // TODO: Find a way to feed the modal input with data of the task to be updated.
  // FIX: Why is it refreshing when submitted?
  const handleUpdateTask = (e: any, uuid: string) => {
    e.preventDefault();
    // Declare Backup task variable.
    let taskBackup;

    // Delete selected task from tasks array.
    const tasksFiltered = tasks.filter((task) => {
      const toUpdate = task.uuid === uuid;
      if (toUpdate) {
        if (
          task.name === taskName ||
          task.body === taskBody ||
          task.isDone === isTaskComplete
        ) {
        }
        // Copy to Backup task variable.
        taskBackup = {
          name: taskName,
          id: task.id,
          uuid: uuid,
          body: taskBody,
          isDone: isTaskComplete,
        };
        setTasks([...tasks, taskBackup]);
        setTaskName("");
        setTaskBody("");
        setError("");
      }
      return !toUpdate;
    });

    // Create new entry with same id.
    if (taskBackup) {
      setTasks([...tasksFiltered, taskBackup]);
    }

    return Error("Failed to backup task.");
  };

*/
