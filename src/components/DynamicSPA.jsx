import { useState } from "react";

export default function DynamicSPA() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("About")}>About</button>
      <h2>{page} Page</h2>
    </>
  );
}