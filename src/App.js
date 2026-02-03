import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://13.127.188.65/home/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API error");
        }
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        setError("Failed to load data");
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Django → React Test</h2>

        {message && <p>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
    </div>
  );
}

export default App;
