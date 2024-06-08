import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleTask } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [newTask, setNewTask] = React.useState('');

    const handleAddTask = () => {
        dispatch(addTask(newTask));
        setNewTask('');
    };

    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
            <span
                onClick={() => dispatch(toggleTask(task.id))}
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
                        <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
