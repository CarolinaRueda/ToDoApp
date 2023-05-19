import { FC, Fragment } from "react";
import { GrClose } from "react-icons/gr";

const Priority: FC<IPriorityProps> = ({
  dark,
  todos,
  color,
  priority,
  checkTodo,
  handleDelete,
}) => {
  return (
    <div className="flex flex-col mx-auto mb-5 border-2 border-[#780fb9] rounded-xl max-w-xs md:min-w-[26rem] dark:border-[#DEBAD6] bg-[#DEBAD6] dark:bg-[#780fb9]">
      <div className="flex flex-row justify-center items-center bg-[#780fb9] font-comfortaa font-extrabold rounded-lg dark:bg-[#DEBAD6]">
        <div className={`bg-[${color}] w-3 h-3 rounded-full mx-2`}></div>
        <h2 className="text-[#DEBAD6] dark:text-[#780fb9]">
          {priority.toUpperCase()}
        </h2>
      </div>
      <div>
        <div
          id="checklist"
          className={`${dark ? "test" : ""} ${
            todos.length > 0 ? "grid justify-left " : "flex"
          }relative items-center`}
        >
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Fragment key={todo.id}>
                <input
                  value={todo.todo}
                  type="checkbox"
                  id={todo.id}
                  className="relative grid items-center w-4 h-4 border-0 cursor-pointer bg-transparent"
                  onClick={() => checkTodo(todo.id)}
                />
                <label
                  htmlFor={todo.id}
                  className="relative z-10 cursor-pointer flex justify-between items-center transition-colors duration-150 "
                >
                  {todo.todo}
                  {todo.check === true ? null : (
                    <GrClose
                      className="pointer-events-auto my-2"
                      size={"1.25rem"}
                      onClick={() => handleDelete(todo.id)}
                    />
                  )}
                </label>
              </Fragment>
            ))
          ) : (
            <p className="text-center">Not have todos yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Priority;
