import React from "react"
import { useTodos, Todo } from "../hooks/useTodos"

export default function Todos() {

    const { state, dispatch } = useTodos()

    const visibleTodos = state.showCompleted ? state.todos : state.todos.filter((todo: Todo) => !todo.completed)

    return (
        <div className='grid grid-cols-1 gap-4'>
            <div className='flex gap-2'>
                <input name='hideCompleted' type="checkbox" checked={state.showCompleted} onChange={() => dispatch({type: 'SHOW_COMPLETED'})} />
                <label htmlFor="hideCompleted">Afficher les tâches accomplies</label>
            </div>
            
                
        <ul className='flex flex-col gap-4'>
            {visibleTodos.map((todo) =>
                <li className='flex gap-2 items-center justify-between' key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => dispatch({type: 'TOGGLE_TODO', payload: todo})} />
                    {todo.title}
                    <button
                        onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
                        className='bg-red-400 py-2 px-4 rounded-md'
                    >Supprimer</button>
                </li>)}
            </ul>
            <button className='bg-red-400 py-2 px-4 rounded-md' onClick={() => dispatch({type: 'REMOVE_CHECKED_TODOS'})}>Supprimer les tâches accomplies</button>
      </div>
  )
}
