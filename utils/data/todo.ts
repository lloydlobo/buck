import { TasksType } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const todoData: TasksType = [
    {
        id: 1,
        uuid: uuidv4(),
        name: 'Done',
        body: 'Check the box to mark done',
        isDone: false,
    },
    {
        id: 2,
        uuid: uuidv4(),
        name: 'Delete',
        body: 'Click X to delete task.',
        isDone: false,
    },
    {
        id: 3,
        uuid: uuidv4(),
        name: 'Hide',
        body: 'Click - to hide task.',
        isDone: false,
    },
];
