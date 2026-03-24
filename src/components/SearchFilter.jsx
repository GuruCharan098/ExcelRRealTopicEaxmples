import { useState } from "react";

export default function SearchFilter() {
  const items = ["Apple", "Banana", "Orange"];
  const [query, setQuery] = useState("");

  return (
    <>
      <input onChange={(e) => setQuery(e.target.value)} />
      {items
        .filter((i) => i.toLowerCase().includes(query.toLowerCase()))
        .map((i) => (
          <div key={i}>{i}</div>
        ))}
    </>
  );
}