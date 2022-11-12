// Importing Components
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { AddTask } from '../components/todo/AddTask';
import { Tasks } from '../components/todo/Tasks';
import Layout from '../components/Layout';
import { TodoHeader } from '../components/todo/Header';
import { StorageKeyVal, TaskType } from '../types';
import { SkeletonList } from '../components/ui/Skeleton/SkeletonList';

// https://stackoverflow.com/questions/73613502/localstorage-is-not-defined-in-nextjs-redux-and-typescript
// https://itnext.io/having-fun-deconstructing-the-localstorage-in-typescript-e5e99d95aa13
//
function getFromLocalStorage(key: string, defaultValue: any) {
    typeof window !== 'undefined'
        ? console.log('You are on the browser. localStorage: true.')
        : console.log('You are on the server. localStorage: false.');
    return !key || typeof window === 'undefined'
        ? defaultValue
        : localStorage.getItem(key);
}

function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [tasks, setTasks] = useState([] as TaskType[]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);
    }, []);

    const localData = getFromLocalStorage('taskAdded', tasks);
    useEffect(() => {
        const getTasks = JSON.parse(localData) as null | TaskType[];
        getTasks == null ? setTasks([]) : setTasks(getTasks);
        // eslint-disable-next-line
    }, []);

    // Add Task
    const addTask = (task: any): void => {
        const id = uuidv4();
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'Successfully added a new task!',
            timer: 1000,
            showConfirmButton: false,
            timerProgressBar: true,
            // position: 'bottom',
            background: 'none',
            backdrop: 'rgba(0,0,0,0.4)',
        });

        localStorage.setItem('taskAdded', JSON.stringify([...tasks, newTask]));
    };

    // Delete Task
    const deleteTask = (id: TaskType['id']): void => {
        const deleteTask = tasks.filter((task) => task.id !== id);

        setTasks(deleteTask);

        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have successfully deleted a task!',
        });

        localStorage.setItem('taskAdded', JSON.stringify(deleteTask));
    };

    // Edit Task
    const editTask = (id: TaskType['id']) => {
        const text = prompt('Task Name');
        const day = prompt('Day and Time');

        const localData = getFromLocalStorage('taskAdded', tasks);
        const getTasks = JSON.parse(localData) as null | TaskType[];

        getTasks == null ? console.error('') : console.log('defined');

        const myData = getTasks?.map((x) =>
            x.id === id ? { ...x, text: text, day: day, id: uuidv4() } : x
        );

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully edited an existing task!',
        });

        localStorage.setItem('taskAdded', JSON.stringify(myData));
        window.location.reload();
    };

    return (
        <>
            <Layout title="Todo">
                {loading ? (
                    <div className="spinnerContainer">
                        <div
                            className="spinner-grow text-primary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow text-secondary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow text-success"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow text-warning"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="container mt-6 grid place-content-center text-center">
                        {/* App Header that has open and App Name */}
                        <TodoHeader
                            showForm={() => setShowAddTask(!showAddTask)}
                            changeTextAndColor={showAddTask}
                        />

                        {/* Revealing of Add Task Form */}
                        {showAddTask && <AddTask onSave={addTask} />}

                        {/* Task Counter */}
                        <h3 className="mb-6">
                            Number of Tasks: {tasks.length}
                        </h3>

                        {/* Displaying of Tasks */}
                        {tasks.length > 0 ? (
                            <Tasks
                                tasks={tasks}
                                onDelete={deleteTask}
                                onEdit={editTask}
                            />
                        ) : (
                            <div className="opacity-50">
                                <p className="mb-2 text-warning">
                                    No Tasks Found!
                                </p>
                                <SkeletonList />
                            </div>
                        )}
                    </div>
                )}
            </Layout>
        </>
    );
}

export default App;

function isValid({ value }: { value: string | null }): boolean {
    return [null, undefined, ''].includes(value);
}
function isValidJSON({ value }: { value: string | null | any }): boolean {
    return [null, undefined, ''].includes(value);
}

function getStorageItem<T>({ key, defaultValue }: StorageKeyVal<T>): T {
    if (typeof window !== 'undefined') {
        const { [key]: value }: Storage =
            typeof window !== undefined
                ? localStorage
                : ({ [key]: undefined } as unknown as Storage);

        return !isValid(value) ? defaultValue : JSON.parse(value);
    } else {
        return defaultValue;
    }
}
