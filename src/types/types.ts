export type FilterT = "all" | "completed" | "uncompleted";

export interface ITodo {
  id: string;
  text: string;
  date: string;
  completed: boolean;
}

export interface IMTodo {
  id: string;
  text: string;
  date: string;
  completed: boolean;
  setTodos: (a: ITodo[]) => void;
  todos: ITodo[];
  setActive: (a: string) => void;
}
