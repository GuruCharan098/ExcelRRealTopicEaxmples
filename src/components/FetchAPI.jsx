import { useState } from "react";

export default function FetchAPI() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await res.json();
      setData(json);
    } catch {
      alert("Error fetching");
    }
  };

  return (
    <>
      <button onClick={fetchData}>Fetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}