import { useCallback, useEffect, useState } from "react";

function List({getItems}) {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setItems(getItems(5));
        console.log('Updating items');
    }, [getItems]);

    return items.map((item) => <div key={item}>{item}</div>);
}

export default function CallbackComponent() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback((incrementor) => {
        return [number, number + 1 + incrementor, number + 2 + incrementor];
    }, [number]);

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    };

    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems}></List>
        </div>
    )
}