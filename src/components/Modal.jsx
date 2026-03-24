import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>

      {open && (
        <div style={{ background: "#0008", padding: "20px" }}>
          <div>
            <button onClick={() => setOpen(false)}>Close</button>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </>
  );
}