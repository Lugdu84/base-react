import React, { useRef } from "react"
import { useTodos } from "../hooks/useTodos"

export default function Todos() {

    const { visibleTodos, showCompleted, toggleFilter, toggleTodo, clearCompleted, removeTodo, addTodo } = useTodos()
    const newTodoRef = useRef<HTMLInputElement>(null)
        

    const handleAddTodo = () => {
        if (!newTodoRef.current) return
        const newTodoTitle = newTodoRef.current.value
        if (newTodoTitle !== '') {
            addTodo({
                id: Date.now(),
                title: newTodoTitle,
                completed: false
            })
            newTodoRef.current.value = ''
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodo()
        }
    }

    return (
        <div className='grid grid-cols-1 gap-4'>
            <div className='flex gap-2'>
                <input name='hideCompleted' type="checkbox" checked={showCompleted} onChange={toggleFilter} />
                <label htmlFor="hideCompleted">Afficher les tâches accomplies</label>
            </div>
            <ul className='flex flex-col gap-4'>
                {visibleTodos.map((todo) =>
                    <li className='flex gap-2 items-center justify-between' key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)} />
                        {todo.title}
                        <button
                            onClick={() => removeTodo(todo)}
                            className='bg-red-400 py-2 px-4 rounded-md'
                        >Supprimer</button>
                    </li>)}
            </ul>
            <div className='flex flex-col gap-2'>
                <input ref={newTodoRef} placeholder="Le titre de votre nouvelle tâche" className=" border border-slate-700 rounded-md p-1" type="text" onKeyDown={handleKeyPress} />
                <button className='bg-green-400 py-2 px-4 rounded-md' onClick={handleAddTodo}>Ajouter</button>
            </div>
            <button className='bg-red-400 py-2 px-4 rounded-md' onClick={clearCompleted}>Supprimer les tâches accomplies</button>
        </div>
    )
}
