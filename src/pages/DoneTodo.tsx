import { FC } from "react";
import { BsFillCheckCircleFill, BsCheck } from "react-icons/bs";

interface ITodo {
  todo: string;
  priority: string;
  check: boolean;
}

interface DoneTodoProps {
  todos: ITodo[];
}

const DoneTodo: FC<DoneTodoProps> = ({ todos }) => {
  return (
    <div className="relative m-3 md:mr-3 dark:text-white z-10">
      <div className="flex flex-col mx-auto mb-5 border-2 border-[#780fb9] rounded-xl max-w-xs md:min-w-[26rem] dark:border-[#DEBAD6] bg-[#DEBAD6] dark:bg-[#780fb9]">
        <div className="flex flex-row justify-center items-center bg-[#780fb9] font-comfortaa font-extrabold rounded-lg dark:bg-[#DEBAD6]">
          <h2 className="bg-[#780fb9] text-[#DEBAD6] dark:bg-[#DEBAD6] dark:text-[#780fb9]">
            Done
          </h2>
          <BsFillCheckCircleFill className="ml-2 bg-[#780fb9] text-[#DEBAD6] dark:bg-[#DEBAD6] dark:text-[#780fb9]" />
        </div>
        {todos.map((todo, idx) => (
          <div key={idx}>
            <p className="flex items-center m-2">
              <BsCheck className="mr-2 text-[#780fb9] dark:text-[#debad6]" />
              {todo.todo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoneTodo;
