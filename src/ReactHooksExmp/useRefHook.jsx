import { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    const FocusInuptdata = ()=>{
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={FocusInuptdata}>Focus input</button>
        </>
    )
}

export default FocusInput ;