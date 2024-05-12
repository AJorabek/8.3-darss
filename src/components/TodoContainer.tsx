import { useContext, useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import FilterContext from "../context/filterContext";
import { createPortal } from "react-dom";
import EditTodoModal from "./EditModal";
const TodoContainer = () => {
  const { setTodos, todos, filter } = useContext(FilterContext);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (active.length) {
      setOpen(true);
    }
  }, [active]);
  return (
    <div className="w-full bg-slate-200 p-3 rounded-lg grid gap-4">
      {filter === "all" &&
        todos.map((e) => (
          <SingleTodo
            {...e}
            todos={todos}
            setTodos={setTodos}
            key={e.id}
            setActive={setActive}
          />
        ))}
      {filter === "completed" &&
        todos
          .filter((e) => e.completed === true)
          .map((e) => (
            <SingleTodo
              {...e}
              todos={todos}
              setTodos={setTodos}
              key={e.id}
              setActive={setActive}
            />
          ))}
      {filter === "uncompleted" &&
        todos
          .filter((e) => e.completed !== true)
          .map((e) => (
            <SingleTodo
              {...e}
              todos={todos}
              setTodos={setTodos}
              key={e.id}
              setActive={setActive}
            />
          ))}
      {todos.length === 0 && (
        <h1 className="text-2xl font-semibold text-center">
          You don't have todo!
        </h1>
      )}
      {createPortal(
        <EditTodoModal
          id={active}
          open={open}
          setOpen={setOpen}
          setActive={setActive}
        />,
        document.body
      )}
    </div>
  );
};

export default TodoContainer;
