import { useState, useEffect } from 'react';

const API_URL = "http://localhost:3000/users";

const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch(API_URL);
        const result = await res.json();
        setData(result); // ✅ FIX: set data here
      } catch (error) {
        console.error("GET Error:", error);
      }
    };

    getdata();
  }, []);

  return (
    <>
      <h2>useEffect Example</h2>

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> 
        ))}
      </ul>
    </>
  );
};

export default UseEffect;