import React, { useReducer } from 'react'

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

type Action = {
    type: 'ADD_TODO',
    payload: Todo
} | {
    type: 'REMOVE_TODO',
    payload: Todo
} | {
    type: 'TOGGLE_TODO',
    payload: Todo
} | {
    type: 'REMOVE_CHECKED_TODOS'
}
    |
{
    type: 'SHOW_COMPLETED'
}
type State = {
    todos: Todo[]
    showCompleted: boolean
}

export default function Todos() {

    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case 'ADD_TODO':
                return { ...state, todos: [...state.todos, action.payload] }
            case 'REMOVE_TODO':
                return { ...state, todos: state.todos.filter((todo: Todo) => todo.id !== action.payload.id) }
            case 'TOGGLE_TODO':
                return { ...state, todos: state.todos.map((todo: Todo) => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo) }
            case 'REMOVE_CHECKED_TODOS':
                return { ...state, todos: state.todos.filter((todo: Todo) => !todo.completed) }
            
            case 'SHOW_COMPLETED':
                return { ...state, showCompleted: !state.showCompleted }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        todos: [
            { id: 1, title: 'Faire la vaisselle', completed: false },
            { id: 2, title: 'Faire la lessive', completed: false },
            { id: 3, title: 'Faire le ménage', completed: false },
        ],
        showCompleted: false
    })

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
