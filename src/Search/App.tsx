import { useState, useEffect, useCallback } from "react";
import "./App.css";

export const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${searchValue}/comments`
        );
        if (!response.ok) {
          // What happens with this throw error ?
          throw new Error(`${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    const timeOutId = setTimeout(getData, 1000);

    return function cleanup() {
      clearTimeout(timeOutId);
    };
  }, [searchValue]);

  if (loading) return <>...loading</>;

  return (
    <div className="page">
      <span>Blog Posts </span>
      <input value={searchValue} onChange={(event) => handleChange(event)} />
      <div className="blogs">
        {data &&
          data.map((blog) => {
            return (
              <div className="blogCard" key={blog.body}>
                <span> {blog.title} </span>
                <span> {blog.postId} </span>
                <span> {blog.body} </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
