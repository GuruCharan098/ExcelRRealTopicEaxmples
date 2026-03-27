import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { AddItemAsync } from './ReduxAction';

const ReduxReactApp = () => {
    const [input, setInput] = useState("");
    
    const items = useSelector((state) => state.items);
    const loading = useSelector((state) => state.loading);

    const dispatch = useDispatch();

    const addItem = () => {
        if (!input.trim()) return;

        dispatch(AddItemAsync(input));
        setInput("");
    };

    return (
        <div>
            <h2>React-Redux Example</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={addItem}>Add</button>

            {loading && <p>Adding....</p>}

            <ul>
                {Array.isArray(items) && items.length > 0 ? (
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : (
                    <p>No Items found</p>
                )}
            </ul>
        </div>
    );
};

export default ReduxReactApp;