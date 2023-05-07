import Priority from "./Priority";
import { FC } from "react";

interface ITodo {
  todo: string;
  priority: string;
  check: boolean;
  id: string;
}

interface IPriorityProps {
  dark: boolean;
  todos: ITodo[];
}

const PriorityTodo: FC<IPriorityProps> = ({ dark, todos }) => {
  return (
    <div className="m-3 md:mx-3 dark:text-white relative z-10">
      <Priority
        dark={dark}
        todos={todos.filter((todo) => todo.priority === "none")}
        color="#515151"
      />
      <Priority
        dark={dark}
        todos={todos.filter((todo) => todo.priority === "high")}
        color="#FF0000"
      />
      <Priority
        dark={dark}
        todos={todos.filter((todo) => todo.priority === "medium")}
        color="#F28500"
      />
      <Priority
        dark={dark}
        todos={todos.filter((todo) => todo.priority === "low")}
        color="#84E184"
      />
    </div>
  );
};

export default PriorityTodo;
