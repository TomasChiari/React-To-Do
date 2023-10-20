import { useContext, useEffect, useState } from "react"
import "./TodoInput.css"
import { TasksContext } from "../../contexts/TasksContext/TasksContext"

export const TodoInput = () => {

    const {addTask} = useContext(TasksContext)

    const [task, setTask] = useState({
        task: "",
        checked: false
    })

    const handleInput = (e) => {
        e.preventDefault();
        setTask({
            [e.target.name]: e.target.value,
            checked: false
        })
    }

    const handleEraseInput = () => {
        const input = document.getElementById('task');
        input.value = "";
    }

    const handleAddTask = () => {
        addTask(task);
        handleEraseInput();
    }

    useEffect(() => {handleEraseInput()}, [task])

    return (
        <article className="container">
            <section className="input">
                <form action="#" onSubmit={e => e.preventDefault()}>
                    <input type="text" name="task" id="task" placeholder="Tarea" value={task.task} onChange={handleInput} required/>
                </form>
            </section>
            <section className="buttons">
                <button className="erase" onClick={handleEraseInput}>Borrar</button>
                <button className="add" onClick={handleAddTask}>Añadir</button>
            </section>

        </article>
    )
}