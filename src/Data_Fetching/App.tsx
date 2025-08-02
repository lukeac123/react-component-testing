import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    const timeoutId = setTimeout(() => getData(), 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) return <>Loading......</>;
  if (error) return <>Error {error}</>;

  return (
    <div>
      {data
        ? data.products.map((item) => {
            return <div key={item.id}>{item.id}</div>;
          })
        : "No Products"}
    </div>
  );
};

export default App;
