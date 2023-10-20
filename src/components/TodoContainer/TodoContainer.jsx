// Components
import { TodoInput } from "../TodoInput/TodoInput"
import { TodoList } from "../TodoList/TodoList"

// css
import "./TodoContainer.css"

export const TodoContainer = () => {

    return (
        <main className="main-container">
            <TodoInput></TodoInput>
            <TodoList></TodoList>
        </main>
    )
}