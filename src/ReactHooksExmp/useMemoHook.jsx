import { useMemo, useState } from "react";

const MemoExample = () => {

    const [number, setNumber] = useState(5);

    const factorial = (num) => {
        console.log("Calculating...");
        return num <= 1 ? 1 : num * factorial(num - 1)
    }

    const result = useMemo(() => factorial(number), [number])

    return (
        <>
            <div>
                <h2>useMemo Example</h2>
                <p>factorial : {result}</p>
                <button onClick={() => setNumber(number + 1)}>Increase</button>
            </div>
        </>
    )

}

export default MemoExample;