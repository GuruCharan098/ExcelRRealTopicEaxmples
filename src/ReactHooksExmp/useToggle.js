import { useState } from "react";

const useToggle = (initValue = false) => {
    const [value, setValue] = useState(initValue);

    const toggle = () => {
        setValue(prev => !prev)
    }
    return [value, toggle]
}
export default useToggle