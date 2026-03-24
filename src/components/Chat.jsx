import { useState } from "react";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const send = () => {
    if (!msg.trim()) return;
    setList([...list, msg]);
    setMsg("");
  };

  return (
    <>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>

      {list.map((m, i) => (
        <p key={i}>{m}</p>
      ))}
    </>
  );
}