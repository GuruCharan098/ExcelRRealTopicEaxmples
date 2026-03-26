import useToggle from "./useToggle";

const ToggleComponent = () => {

    const [isOn, toggle] = useToggle(false);

    return (
        <>
            <div>
                <h2>Custom Hook Example ( Toggle)</h2>
                <p>Status : {isOn ? "ON" : "OFF"}</p>

                <button onClick={toggle}>Toggle</button>
            </div>
        </>
    )

}
export default ToggleComponent;