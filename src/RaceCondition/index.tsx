import { useState, useCallback, useEffect } from "react";

const useDebounce = (searchValue) => {
  const [debouncedSearch, setDebouncedSearch] = useState(searchValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedSearch(searchValue), 1000);
    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  return debouncedSearch;
};

export const App = () => {
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  //this doesn't need to be debounced if searching on key enter
  //const debouncedSearch = useDebounce(searchValue);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/${searchValue}`
      );
      if (!response.ok) throw new Error("error");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [searchValue]);

  const handleSearch = (event) => {
    if (event.key !== "Enter") return;
    getData();
  };

  console.log(data);

  return (
    <div>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={(event) => handleSearch(event)}
      />
      <h3>{data && data.name}</h3>
      <ul>
        {data &&
          data.ingredients.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
      </ul>
      <ul>
        {data &&
          data.instructions.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
      </ul>
    </div>
  );
};
