import { FC } from "react";

const AddTodo: FC<TaskProps> = ({
  dark,
  todo,
  priority,
  handleTodo,
  handlePriority,
  addTodo,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div className="card flex gap-5 bg-[#DEBAD6] flex-col justify-center items-center min-w-[300px] shadow-2xl rounded-lg dark:bg-[#780fb9]">
      <a className="block font-bold text-xl text-[#780fb9] tracking-wide pt-6 dark:text-[#DEBAD6]">
        Add New To Do
      </a>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className={`${dark ? "darkTodo" : ""} inputBox relative w-60`}>
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={handleTodo}
            required={true}
            className="w-full p-2 outline-none text-black text-[1em] bg-transparent border-white dark:text-white"
          />
          <span className="mt-1 absolute left-0 font-bold -translate-y-1 ml-2 p-2 pointer-events-none text-xs uppercase transition-all duration-500 tracking-wider rounded-lg">
            New To Do
          </span>
        </div>
        <div
          className={`${
            dark ? "selectDark" : ""
          } select flex flex-wrap flex-col border-b-2 border-[#780fb9] dark:border-[#debad6]`}
        >
          <label className="flex cursor-pointer relative overflow-hidden mb-1">
            <input
              checked={priority === "none"}
              type="radio"
              name="radio"
              onChange={handlePriority}
              value="none"
              className="absolute -left-[9999px]"
            />
            <span className="flex items-center p-1 rounded-full transition-all ease-in duration-150 text-[#000] hover:bg-purple-400 dark:text-white">
              None
            </span>
          </label>
          <label className="flex cursor-pointer relative overflow-hidden mb-1">
            <input
              checked={priority === "high"}
              type="radio"
              name="radio"
              onChange={handlePriority}
              value="high"
              className="absolute -left-[9999px]"
            />
            <span className="flex items-center p-1 rounded-full transition-all ease-in duration-150 text-[#000] hover:bg-purple-400 dark:text-white">
              High
            </span>
          </label>
          <label className="flex cursor-pointer relative overflow-hidden mb-1">
            <input
              checked={priority === "medium"}
              type="radio"
              name="radio"
              onChange={handlePriority}
              value="medium"
              className="absolute -left-[9999px]"
            />
            <span className="flex items-center p-1 rounded-full transition-all ease-in duration-150 text-[#000] hover:bg-purple-400 dark:text-white">
              Medium
            </span>
          </label>
          <label className="flex cursor-pointer relative overflow-hidden mb-1">
            <input
              checked={priority === "low"}
              type="radio"
              name="radio"
              onChange={handlePriority}
              value="low"
              className="absolute -left-[9999px]"
            />
            <span className="flex items-center p-1 rounded-full transition-all ease-in duration-150 text-[#000] hover:bg-purple-400 dark:text-white">
              Low
            </span>
          </label>
        </div>
        <button className="rounded-md py-2 px-4 mx-auto border-2 font-bold bg-transparent border-transparent transition-all duration-500 uppercase text-xs mb-4 cursor-pointer hover:bg-[#780fb9] hover:text-white dark:hover:bg-[#d599fa] dark:hover:text-black">
          Enter
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
