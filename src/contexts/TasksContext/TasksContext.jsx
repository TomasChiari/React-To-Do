import { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksContextProvider = ({children}) => {

    const [taskList, setTaskList] = useState([]);

    const addTask = task => {
        if(!(isTaskInList(task.task))) {
            setTaskList(prev => [
                ...prev,
                task
            ])
        }
    }

    const removeTask = task => {
        setTaskList(
            taskList.filter(oldTask => oldTask.task !== task.task)
        )
    }

    const toggleCheck = task => task.checked = !task.checked
    

    const isTaskInList = taskName => taskList.some(task => task.task === taskName)


    return (
        <TasksContext.Provider value={{taskList, addTask, removeTask, toggleCheck}}>
            {children}
        </TasksContext.Provider>
    )
}