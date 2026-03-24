const cache = {};

export default function CacheAPI() {
  const fetchWithCache = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    if (cache[url]) {
      console.log("From Cache", cache[url]);
      return;
    }

    const res = await fetch(url);
    const data = await res.json();
    cache[url] = data;

    console.log("From API", data);
  };

  return <button onClick={fetchWithCache}>Fetch Cached</button>;
}