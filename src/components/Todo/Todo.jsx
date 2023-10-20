import { useContext, useEffect, useState } from "react"
import { TasksContext } from "../../contexts/TasksContext/TasksContext"
import Check from "../../assets/comprobado.png"
import Uncheck from "../../assets/cancelar.png"
import "./Todo.css"

export const Todo = ({task}) => {

    const {removeTask, toggleCheck} = useContext(TasksContext);
    
    const [thisTask, setThisTask] = useState({...task})

    const toggle = () => {
        toggleCheck(task)
        setThisTask({
            task:task.task,
            checked: !task.checked,
        })
    }

    useEffect(() => {
        
    }, [thisTask.checked])

    return(
        <>
            <div className="todo">
                <section className="task">
                    <span style={task.checked?{textDecorationLine: "line-through"}:{textDecorationLine: "none"}}>{task.task}</span>
                </section>
                <section className="checkButtons">
                    <img src={Check} alt="toggle check" onClick={() => {toggle()}}/>
                    <img src={Uncheck} alt="remove task" onClick={() => removeTask(task)}/>
                </section>
            </div>
        </>
    )
}