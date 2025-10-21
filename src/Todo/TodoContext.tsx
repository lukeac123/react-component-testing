import { useContext, createContext } from "react";

interface TodoContextType {
  todoList: any[];
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TodoContext = createContext<TodoContextType>({
  todoList: [],
  setTodoList: () => {},
});

export const useTodoContext = () => useContext(TodoContext);
