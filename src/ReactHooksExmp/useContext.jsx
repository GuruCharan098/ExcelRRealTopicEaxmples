import { createContext, useContext } from 'react'

const ThemeContext = createContext('light');

const Child = () => {
    const theme = useContext(ThemeContext)
    return <div style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>Theme</div>
}


const UseContextHook = () => {
    return (
        <>
            <div>
                <h2>useContext Example</h2>
                <ThemeContext.Provider value="light">
                    <Child />
                </ThemeContext.Provider>
            </div >
        </>
    )
}
export default UseContextHook;