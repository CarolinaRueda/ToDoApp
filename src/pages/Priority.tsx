import { FC, Fragment } from "react";

interface ITodo {
  todo: string;
  priority: string;
  check: boolean;
  id: string;
}

interface IPriorityProps {
  dark: boolean;
  todos: ITodo[];
  color: string;
}

const Priority: FC<IPriorityProps> = ({ dark, todos, color }) => {
  return (
    <div className="flex flex-col mx-auto mb-5 border-2 border-[#780fb9] rounded-xl max-w-xs md:min-w-[26rem] dark:border-[#DEBAD6] bg-[#DEBAD6] dark:bg-[#780fb9]">
      <div className="flex flex-row justify-center items-center bg-[#780fb9] font-comfortaa font-extrabold rounded-lg dark:bg-[#DEBAD6]">
        <div className={`bg-[${color}] w-3 h-3 rounded-full mx-2`}></div>
        <h2 className="text-[#DEBAD6] dark:text-[#780fb9]">
          {todos[0].priority.toLocaleUpperCase()}
        </h2>
      </div>
      <div>
        <div
          id="checklist"
          className={`${
            dark ? "test" : ""
          } relative grid justify-left items-center`}
        >
          {todos.map((todo) => (
            <Fragment key={todo.id}>
              <input
                value={todo.todo}
                type="checkbox"
                id={todo.id}
                className="relative grid items-center w-4 h-4 border-0 cursor-pointer bg-transparent"
              />
              <label
                htmlFor={todo.id}
                className="relative cursor-pointer grid items-center transition-colors duration-150 w-fit m-1"
              >
                {todo.todo}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Priority;
