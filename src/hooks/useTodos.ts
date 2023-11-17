import { useCallback, useReducer } from "react";

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
export function useTodos(initialTodos: Todo[] = []) {
    const [state, dispatch] = useReducer(reducerTodos, {
        todos: initialTodos,
        showCompleted: false
    })
    const visibleTodos = state.showCompleted ? state.todos : state.todos.filter((todo: Todo) => !todo.completed)
    return {
        visibleTodos,
        showCompleted: state.showCompleted,
        toggleTodo: useCallback( (todo: Todo) => dispatch({ type: 'TOGGLE_TODO', payload: todo }), []) ,
        removeTodo: useCallback( (todo: Todo) => dispatch({ type: 'REMOVE_TODO', payload: todo }), []),
        clearCompleted: useCallback(() => dispatch({ type: 'REMOVE_CHECKED_TODOS' }), []) ,
        toggleFilter: useCallback(() => dispatch({ type: 'SHOW_COMPLETED' }), []) ,
        addTodo: useCallback((todo: Todo) => dispatch({ type: 'ADD_TODO', payload: todo }), []) 
    }
}