import Nav from "./Nav";
import Svg from "./Svg";
import { FC } from "react";
import Task from "./Task";
import PriorityTodo from "./PriorityContainer";
import DoneTodo from "./DoneTodo";
import { v4 as uuidv4 } from "uuid";

interface DashProps {
  dark: boolean;
  setDark: () => void;
}

interface ITodo {
  todo: string;
  priority: string;
  check: boolean;
  id: string;
}

const Dashboard: FC<DashProps> = ({ dark, setDark }) => {
  const testTodos: ITodo[] = [
    {
      todo: "make dinner",
      priority: "medium",
      check: true,
      id: uuidv4(),
    },
    {
      todo: "take a shower",
      priority: "none",
      check: false,
      id: uuidv4(),
    },
    {
      todo: "programming",
      priority: "high",
      check: false,
      id: uuidv4(),
    },
    {
      todo: "exercise",
      priority: "low",
      check: false,
      id: uuidv4(),
    },
    {
      todo: "kill max",
      priority: "high",
      check: false,
      id: uuidv4(),
    },
    {
      todo: "haggyn puta",
      priority: "none",
      check: false,
      id: uuidv4(),
    },
    {
      todo: "gabo black",
      priority: "medium",
      check: false,
      id: uuidv4(),
    },
  ];
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <Svg dark={dark} />
      <Nav dark={dark} setDark={setDark} />
      <div className="flex flex-col md:flex-row md:justify-around">
        <Task dark={dark} />
        <PriorityTodo dark={dark} todos={testTodos} />
        <DoneTodo todos={testTodos.filter((todo) => todo.check === true)} />
      </div>
    </div>
  );
};

export default Dashboard;
