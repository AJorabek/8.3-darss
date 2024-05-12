import { ITodo } from "../types/types";
import Action from "./Action";

const Actions = ({
  setTodos,
  id,
  todos,
  setActive,
}: {
  setTodos: (a: ITodo[]) => void;
  id: string;
  todos: ITodo[];
  setActive: (a: string) => void;
}) => {
  return (
    <article className="flex gap-3">
      <Action
        onClick={() => {
          setActive(id);
        }}
        url="/edit.svg"
      />
      <Action
        onClick={() => {
          setTodos(todos.filter((e) => e.id !== id));
        }}
        url="/delete.svg"
      />
    </article>
  );
};

export default Actions;
