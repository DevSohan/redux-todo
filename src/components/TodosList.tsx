import { PencilLine, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, Todo } from '../store/todoSlice'
const TodosList = () => {
    const todos = useSelector(({todos}: {todos: Todo[]}) => todos)
    console.log(todos)
    const dispatch = useDispatch()

    return (
        <div className='max-w-sm mx-auto mt-10'>
            <h1 className='text-3xl font-bold text-red-600 my-6'>Todos</h1>
            {
                todos.length > 0 ? (
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            todos.map((todo) => (
                                <li key={todo.id} className="py-3 sm:pb-4 border-b-2 border-gray-200">
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {todo.title}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center gap-3 text-base font-semibold text-gray-900 dark:text-white">
                                            <PencilLine className="w-6 h-6 bg-blue-500 text-white p-1 rounded-md" />
                                            <X onClick={() => dispatch(removeTodo(todo.id))} className="w-6 h-6 bg-red-500 text-white p-1 rounded-md" />
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <>
                        <p className="text-lg font-bold text-red-600 mty-6">No Todos</p>
                        <p className="text-base mb-6">Please add a todo first</p>
                    </>
                )

            }
        </div>
    )
}

export default TodosList
