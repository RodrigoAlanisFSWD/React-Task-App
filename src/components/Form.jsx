import { useForm } from 'react-hook-form';
import Alert from './Alert';
import uniqid from 'uniqid';

function Form(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.id = uniqid();
        data.done = false;
        if (!localStorage.getItem('tasks')) {
            localStorage.setItem('tasks', JSON.stringify([data]));
        } else {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.push(data);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        props.handleUpdate()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto mt-5 ra-container">
            <label className="form-label">
                Name
            </label>
            <input
                className="form-control my-3"
                {...register("name", {
                    required: {
                        value: true,
                        message: "The name is required"
                    },
                    minLength: {
                        value: 5,
                        message: "The name must be longer than 5 characters"
                    }
                })}
            />
            { errors?.name?.message ? <Alert msg={errors.name.message} type="danger" /> : null}

            <select
                className="form-control my-3"
                {...register("category", {
                    required: {
                        value: true,
                        message: "The category is required"
                    },
                    min: {
                        value: 1,
                        message: "The category is required"
                    }
                })}
            >
                <option value={0} defaultValue hidden>Select A Category</option>
                <option value={1}>Programming</option>
                <option value={2}>Other</option>
            </select>
            { errors?.category?.message ? <Alert msg={errors.category.message} type="danger" /> : null}

            <button className="btn btn-primary block w-25" type="submit">
                Send
            </button>
        </form>
    )
}

export default Form