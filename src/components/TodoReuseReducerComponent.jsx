import { ACTIONS } from "./TodoReducerComponent";

export default function Todo({ todo, dispatch }) {
    return (
        <>
            <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>TOGGLE</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}>DELETE</button>
        </>
    )
}