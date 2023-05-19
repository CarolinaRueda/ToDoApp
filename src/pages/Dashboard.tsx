import Nav from "../components/Nav";
import Svg from "../components/Svg";
import { ChangeEvent, FC, useState } from "react";
import Task from "../components/Task";
import PriorityContainer from "../components/PriorityContainer";
import DoneTodo from "../components/DoneTodo";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const Dashboard: FC = () => {
  const [dark, setDark] = useState(false);
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("none");
  const [todoList, setTodoList] = useState<Array<ITodo>>([]);

  //load todos
  useEffect(() => {
    const jsonTodos = localStorage.getItem("todos") || JSON.stringify([]);
    const localTodos = JSON.parse(jsonTodos);
    setTodoList(localTodos);
  }, []);

  //set todos
  useEffect(() => {
    if (!todoList.length) return;
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const handleTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handlePriority = (e: ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };

  const addTodo = (): void => {
    if (!todo) return;
    const newTodo = {
      todo: todo,
      priority: priority,
      check: false,
      id: uuidv4(),
    };
    setTodoList([...todoList, newTodo]);
    setTodo("");
    setPriority("none");
  };

  const checkTodo = (todoId: string) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todoId === todo.id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  // delete todo
  const handleDelete = (todoId: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div
      className={`${
        dark ? "dark bg-[#51087E]" : "bg-[#d599fa]"
      } min-h-screen duration-300 transition-colors relative flex flex-col overflow-hidden`}
    >
      <Svg dark={dark} />
      <Nav dark={dark} setDark={() => setDark(!dark)} />
      <div className="flex flex-col md:flex-row md:justify-around">
        <Task
          dark={dark}
          todo={todo}
          priority={priority}
          handleTodo={handleTodo}
          handlePriority={handlePriority}
          addTodo={addTodo}
        />
        <PriorityContainer
          dark={dark}
          todos={todoList}
          checkTodo={checkTodo}
          handleDelete={handleDelete}
        />
        <DoneTodo todos={todoList.filter((todo) => todo.check === true)} />
      </div>
    </div>
  );
};

export default Dashboard;
