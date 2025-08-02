import { useContext } from "react";
import { TodosContext } from "./App";
import { clsx } from "clsx";
import "./TodoCard.css";

export const TodoCard = ({ index }) => {
  const { todoList, setTodoList } = useContext(TodosContext);

  const handleDelete = () => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  const handleCompleted = () => {
    const newTodos = [...todoList];
    newTodos[index].status = "completed";
    setTodoList(newTodos);
  };

  return (
    <div
      className={clsx(
        "todoCard",
        todoList[index].status === "completed"
          ? "todoCardCompleted"
          : "todoCardPending"
      )}
    >
      {todoList[index].todo} {todoList[index].dueDate}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleCompleted}>Completed</button>
    </div>
  );
};
