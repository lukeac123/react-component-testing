import { useTodoContext } from "./TodoContext";
import { clsx } from "clsx";
import "./TodoCard.css";

export const TodoCard = ({ index }) => {
  const { todoList, setTodoList } = useTodoContext();

  console.log(todoList);

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
