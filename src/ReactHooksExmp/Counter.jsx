import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>useState Example</h2>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>

    )
}

export default Counter; 