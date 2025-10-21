import { useState, useEffect, useCallback } from "react";
import "./App.css";

const useDebounce = (value, timeout) => {
  const [debounce, setDebounce] = useState();
  useEffect(() => {
    const timeoutId = setTimeout(() => setDebounce(value), timeout);
    return () => clearTimeout(timeoutId);
  }, [value, timeout]);
  return debounce;
};

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("1");
  const [data, setData] = useState([]);

  const searchValueDebounce = useDebounce(searchValue, 1000);

  const handleChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${searchValueDebounce}/comments`
      );
      if (!response.ok) throw new Error(`${response.status}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error?.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [searchValueDebounce]);

  useEffect(() => {
    getData();
  }, []);

  if (error) return <div className="page">{error}</div>;
  if (loading) return <div className="page">...loading</div>;

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
