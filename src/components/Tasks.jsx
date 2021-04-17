import Form from './Form';
import Task from './Task';
import { useState, useEffect } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('tasks')) {
            setTasks(JSON.parse(localStorage.getItem('tasks')));
        }
    }, []);

    const handleUpdate = () => {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }

    return (
        <div>
            <Form handleUpdate={handleUpdate} />

            <table className="table table-striped w-50 mx-auto mt-5 ra-container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Done</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => <Task handleUpdate={handleUpdate} key={task.id} data={task}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Tasks;