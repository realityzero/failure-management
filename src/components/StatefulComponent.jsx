import { useState } from "react"

const StatefulButton = ({children}) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <button type="button" onClick={() => setCount(count+1)} className="border-8 border-violet-600">{children}</button>
            <p>Current Count: {count}</p>
        </>
    )
}

export default StatefulButton;