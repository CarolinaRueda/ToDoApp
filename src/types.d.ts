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

interface DoneTodoProps {
  todos: ITodo[];
}

interface NavProps {
  dark: boolean;
  setDark: () => void;
}

interface IPriorityProps {
  dark: boolean;
  todos: ITodo[];
  color: string;
  priority: string;
  checkTodo: (id: string) => void;
  handleDelete: (id: string) => void;
}

interface IPrioryTodo {
  dark: boolean;
  todos: ITodo[];
  checkTodo: (id: string) => void;
  handleDelete: (id: string) => void;
}

interface TaskProps {
  dark: boolean;
  todo: string;
  priority: string;
  handleTodo: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePriority: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
}
