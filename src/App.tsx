import './App.css'
import AddTodo from './components/addTodo'
import TodosList from './components/TodosList'

function App() {

  return (
    <>
      <h1 className='max-w-sm mx-auto text-3xl font-bold text-red-600 text-center pb-10'>Redux-Todos</h1>
      <AddTodo />
      <TodosList />
    </>
  )
}

export default App
