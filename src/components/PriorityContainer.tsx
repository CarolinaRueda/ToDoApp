import Priority from "./Priority";
import { FC } from "react";

const PriorityContainer: FC<IPrioryTodo> = ({
  dark,
  todos,
  checkTodo,
  handleDelete,
}) => {
  return (
    <div className="m-3 md:mx-3 dark:text-white relative z-10">
      <Priority
        dark={dark}
        todos={todos.filter((todo) => todo.priority === "none")}
        color="#515151"
        priority="none"
        checkTodo={checkTodo}
        handleDelete={handleDelete}
      />
      <Priority
        dark={dark}
        todos={todos.filter((todo) => todo.priority === "high")}
        color="#FF0000"
        priority="high"
        checkTodo={checkTodo}
        handleDelete={handleDelete}
      />
      <Priority
        dark={dark}
        todos={todos.filter((todo) => todo.priority === "medium")}
        color="#F28500"
        priority="medium"
        checkTodo={checkTodo}
        handleDelete={handleDelete}
      />
      <Priority
        dark={dark}
        todos={todos.filter((todo) => todo.priority === "low")}
        color="#84E184"
        priority="low"
        checkTodo={checkTodo}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default PriorityContainer;
