import { NavBar } from './components/NavBar/NavBar'
import { TodoContainer } from './components/TodoContainer/TodoContainer'
import './App.css'
import { TasksContextProvider } from './contexts/TasksContext/TasksContext'

function App() {


  return (
    <TasksContextProvider>
      <NavBar/>
      <TodoContainer/>
    </TasksContextProvider>
  )
}

export default App
