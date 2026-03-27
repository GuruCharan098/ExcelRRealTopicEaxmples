import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxSagaApp = () => {
    const [input, setInput] = useState("");

    const items = useSelector((state) => state.items);
    const loading = useSelector((state) => state.loading);

    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!input.trim()) return;

        dispatch({
            type: "ADD_ITEM_REQUEST",
            payload: input,
        });

        setInput("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Redux Saga Example</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter item"
            />

            <button onClick={handleAdd}>Add Item</button>

            {loading && <p>Adding item...</p>}

            <ul>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : (
                    <li>No items yet...</li>
                )}
            </ul>
        </div>
    );
};

export default ReduxSagaApp;