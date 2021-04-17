export default function Task(props) {

    const deleteTask = () => {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks = tasks.filter(el => el.id !== props.data.id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        props.handleUpdate()
    }

    return (
        <tr>
            <th>{props.data.name}</th>
            <td>{props.data.category === 1 ? 'Programming' : 'Other'}</td>
            <td>{props.data.done ? 'Done' : 'Not Done'}</td>
            <td>
                <button onClick={deleteTask} className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}