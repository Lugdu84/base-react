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
type State = {
    todos: Todo[]
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
    })

    return (
      <div className='grid grid-cols-1 gap-4'>
        <ul className='flex flex-col gap-4'>
            {state.todos.map((todo) =>
                <li className='flex gap-2 items-center justify-between' key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => dispatch({type: 'TOGGLE_TODO', payload: todo})} />
                    {todo.title}
                    <button
                        onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
                        className='bg-red-500 py-2 px-4 rounded-md'
                    >Supprimer</button>
                </li>)}
            </ul>
            <button className='bg-red-500 py-2 px-4 rounded-md' onClick={() => dispatch({type: 'REMOVE_CHECKED_TODOS'})}>Supprimer les tâches accomplies</button>
      </div>
  )
}
