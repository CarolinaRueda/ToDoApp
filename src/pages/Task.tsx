import useDate from "../hook/useDate";
// import { BiListPlus } from "react-icons/bi";

const Task = ({ dark }: { dark: boolean }) => {
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
        <div className="card flex gap-5 bg-[#DEBAD6] flex-col justify-center items-center min-w-[300px] shadow-2xl rounded-lg dark:bg-[#780fb9]">
          <a className="block font-bold text-xl text-[#780fb9] tracking-wide pt-6 dark:text-[#DEBAD6]">
            Add New To Do
          </a>
          <form className="flex flex-col gap-2">
            <div className={`${dark ? "darkTodo" : ""} inputBox relative w-60`}>
              <input
                type="text"
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
                  type="radio"
                  name="radio"
                  className="absolute -left-[9999px]"
                />
                <span className="flex items-center p-1 rounded-full transition-all ease-in duration-150 text-[#000] hover:bg-purple-400 dark:text-white">
                  None
                </span>
              </label>
              <label className="flex cursor-pointer relative overflow-hidden mb-1">
                <input
                  type="radio"
                  name="radio"
                  className="absolute -left-[9999px]"
                />
                <span className="flex items-center p-1 rounded-full transition-all ease-in duration-150 text-[#000] hover:bg-purple-400 dark:text-white">
                  High
                </span>
              </label>
              <label className="flex cursor-pointer relative overflow-hidden mb-1">
                <input
                  type="radio"
                  name="radio"
                  className="absolute -left-[9999px]"
                />
                <span className="flex items-center p-1 rounded-full transition-all ease-in duration-150 text-[#000] hover:bg-purple-400 dark:text-white">
                  Medium
                </span>
              </label>
              <label className="flex cursor-pointer relative overflow-hidden mb-1">
                <input
                  type="radio"
                  name="radio"
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
      </div>
    </div>
  );
};

export default Task;
