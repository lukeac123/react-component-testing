import { useState, useEffect, useCallback } from "react";

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

// const getData = useCallback(async () => {
//   try {
//     const response = await fetch(
//       `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
//         page * itemsPerPage
//       }`
//     );
//     if (!response.ok) {
//       console.error(`Response is not valid ${response.status}`);
//       setError(`Response is not valid ${response.status}`);
//     }
//     const data = await response.json();
//     setProducts(data.products);
//   } catch (error) {
//     console.error(error.message);
//     setError(error.message);
//   }
// }, [page, itemsPerPage]);

// useEffect(() => {
//   getData();
// }, [getData]);

// if (error) return <div>{error.toString()}</div>;
// if (!products) return;
