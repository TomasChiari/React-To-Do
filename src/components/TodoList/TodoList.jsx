import { useContext } from "react"
import "./TodoList.css"
import { TasksContext } from "../../contexts/TasksContext/TasksContext"
import { Todo } from "../Todo/Todo"

export const TodoList = () => {
    const {taskList} = useContext(TasksContext)

    return (
        <>
          {taskList.length > 0 ?
           <article className="list">
                {taskList.map(task => <Todo key={task.task} task={task}></Todo>)}
           </article>:
           null}
        </> 
    )
}