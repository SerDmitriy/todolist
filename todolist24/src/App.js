import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo todolist 2024 application</h1>
        <button onClick={fetchData}>Fetch Data</button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul style={{ maxHeight: "500px", overflowY: "scroll" }}>
            {data?.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
