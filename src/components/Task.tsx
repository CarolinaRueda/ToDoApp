import useDate from "../hook/useDate";
import AddTodo from "./AddTodo";
import { FC } from "react";

const Task: FC<TaskProps> = ({
  dark,
  todo,
  priority,
  handleTodo,
  handlePriority,
  addTodo,
}) => {
  const { day, month, year, time, weekday } = useDate();
  return (
    <div className="relative font-comfortaa text-[#51087E] flex flex-col my-2 dark:text-[#d599fa] md:w-auto md:mx-5">
      <div className="m-3 border-b-2 border-[#780fb9] dark:border-[#DEBAD6]">
        <h2 className="text-5xl md:text-3xl py-1 font-bold">{weekday}</h2>
        <h2 className="text-4xl md:text-3xl py-1 font-semibold">
          {day} of {month},{year}
        </h2>
        <h2 className="font-mono font-semibold text-3xl md:text-2xl py-1">
          {time}
        </h2>
      </div>
      <div className="relative mx-auto m-5 z-10">
        <AddTodo
          dark={dark}
          todo={todo}
          priority={priority}
          handleTodo={handleTodo}
          handlePriority={handlePriority}
          addTodo={addTodo}
        />
      </div>
    </div>
  );
};

export default Task;
