import { useState } from "react";

export default function Pagination() {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const [page, setPage] = useState(1);

  const perPage = 5;
  const start = (page - 1) * perPage;

  return (
    <>
      {items.slice(start, start + perPage).map((item) => (
        <div key={item}>{item}</div>
      ))}
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
}