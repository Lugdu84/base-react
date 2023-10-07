import { useReducer } from "react";

export type Todo = {
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


const reducerTodos = (state: State, action: Action) => {
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
export function useTodos() {
    const [state, dispatch] = useReducer(reducerTodos, {
        todos: [
            { id: 1, title: 'Faire la vaisselle', completed: false },
            { id: 2, title: 'Faire la lessive', completed: false },
            { id: 3, title: 'Faire le ménage', completed: false },
        ],
        showCompleted: false
    })
    return { state, dispatch }
}

