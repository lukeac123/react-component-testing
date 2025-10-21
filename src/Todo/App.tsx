import { useState, createContext } from "react";
import { TodoCard } from "./TodoCard";
import { TodoContext } from "./TodoContext";
import "./App.css";

// TODO: Adjust the status depending on time / estimated time amount

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [todoList, setTodoList] = useState([]);

  const handleTodoEnter = () => {
    if (!todoInput || !todoDueDate) return setError(true);
    setTodoList([
      ...todoList,
      { todo: todoInput, status: "pending", dueDate: todoDueDate },
    ]);
    setTodoInput("");
    setTodoDueDate("");
    setError(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleTodoEnter();
  };

  return (
    <div className="App">
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        <text>Todo List</text>
        <input
          placeholder="Enter a Todo"
          onChange={(event) => setTodoInput(event.target.value)}
          onKeyDown={handleKeyDown}
          value={todoInput}
        />
        <input
          type="date"
          value={todoDueDate}
          onChange={(event) => setTodoDueDate(event.target.value)}
        />
        <button onClick={handleTodoEnter}>Enter</button>
        {todoList.map((todoItem, index) => {
          const { todo } = todoItem;
          return <TodoCard key={todo} index={index} />;
        })}
        <button onClick={() => setTodoList([])}>Clear All</button>
        {error && "Error: check all fields have been filled"}
      </TodoContext.Provider>
    </div>
  );
}
