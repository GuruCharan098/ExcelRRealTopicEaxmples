import { useState, useCallback } from 'react';


const Button = ({ onClick }) => {
    console.log("Button rendered..");
    return <button onClick={onClick}>Click Me</button>
}

const ParentComponent = () => {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1)
    }, [count])
    return (
        <>
            <Button onClick={handleClick} />
            <p>Count:{count}</p>
        </>
    )
}

export default ParentComponent; 