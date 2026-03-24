import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i} onClick={() => setTasks(tasks.filter((_, idx) => idx !== i))}>
            {task}
          </li>
        ))}
      </ul>
    </>
  );
}