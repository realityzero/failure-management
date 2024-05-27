import { useRef, useState } from "react"

export const UseRefComponent = () => {
    const [name, setName] = useState('');
    const inputRef = useRef();

    function focus() {
        inputRef.current.focus();
        inputRef.current.value = 'Some Value';
    }
    return (
        <>
            <input className="border-8" ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input>
            <div>My name is {name}</div>
            <button onClick={focus}>useRef Button</button>
        </>
    )
}