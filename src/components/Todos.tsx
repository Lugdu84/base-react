import React from "react"
import { useTodos} from "../hooks/useTodos"

export default function Todos() {

    const { visibleTodos, showCompleted, toggleFilter, toggleTodo, clearCompleted, removeTodo } = useTodos()

    

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
            <button className='bg-red-400 py-2 px-4 rounded-md' onClick={clearCompleted}>Supprimer les tâches accomplies</button>
      </div>
  )
}
