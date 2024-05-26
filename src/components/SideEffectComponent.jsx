import { useEffect, useState } from "react"

const SideEffectButton = ({children}) => {
    const [count, setCount] = useState(1);
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('mounted');
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then(response => response.json())
            .then(json => setItems([json]));
    }, [count]);
    return (
        <>
            <p>Part of SideEffect Component</p>
            <button type="button" onClick={() => setCount(count+1)} className="border-8 border-violet-600">{children}</button>
            <p>Current Count: {count}</p>
            {
                items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                })
            }
        </>
    )
}

export default SideEffectButton;