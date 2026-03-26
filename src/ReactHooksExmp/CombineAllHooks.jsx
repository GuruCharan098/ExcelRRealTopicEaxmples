import Counter from './Counter.jsx'
import UseEffect from './UseEffect.jsx'
import UseContextHook from './useContext.jsx'
import UseReducerHook from './useReducerHook.jsx'
import FocusInput from './useRefHook.jsx'
import MemoExample from './useMemoHook.jsx'
import ParentComponent from './UseCallBackhook.jsx'
import ToggleComponent from './ToggleComponent.jsx'
const CombineAllHooks = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>React All Hooks...!</h1>

            <Counter />
            <UseEffect />
            <UseContextHook />
            <UseReducerHook /> <br></br>
            <FocusInput /> <br></br>
            <MemoExample /><br></br>
            <ParentComponent /> <br></br>
            <ToggleComponent />
        </>
    )
}

export default CombineAllHooks