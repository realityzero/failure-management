import { useReducer, useState } from "react";
import Todo from "./TodoReuseReducerComponent";

export const ACTIONS = {
    ADD_TODO: 'add_todo',
    TOGGLE_TODO: 'toggle_todo',
    DELETE_TODO: 'delete_todo'
};

function reducer(todos, action) {

    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function newTodo(name) {
    return {id: Date.now(), name, complete: false};
}

export default function TodoReducerComponent() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: {name}});
        setName('');
    }

    console.log({todos});
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="block text-gray-600 font-medium bg-slate-200" type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </form>
            {
                todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
                })
            }
        </>
    )
}