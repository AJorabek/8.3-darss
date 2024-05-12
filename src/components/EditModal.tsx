import { FormEvent, useContext, useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import { ITodo } from "../types/types";
import FilterContext from "../context/filterContext";
import { Toaster } from "sonner";

const EditTodoModal = ({
  open,
  setOpen,
  id,
  setActive,
}: {
  id: string;
  open: boolean;
  setOpen: (a: boolean) => void;
  setActive: (a: string) => void;
}) => {
  const [text, setText] = useState("");
  const { setTodos, todos } = useContext(FilterContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prevTodo = todos.find((e) => e.id === id);
    if (prevTodo) {
      const newTodo: ITodo = {
        text,
        completed: prevTodo.completed,
        date: prevTodo.date,
        id: prevTodo.id,
      };
      setTodos(todos.map((e) => (e.id !== prevTodo.id ? e : newTodo)));
      setOpen(false);
      setActive("");
    }
  };

  useEffect(() => {
    const prevTodo = todos.find((e) => e.id === id);
    if (!prevTodo) setOpen(false);
    if (prevTodo) setText(prevTodo.text);
    return () => {
      setActive("");
      setText("");
    };
  }, []);
  return (
    <>
      <Toaster position="top-right" richColors />
      <dialog
        open={open}
        className="bg-black/20 transition-all min-h-full min-w-full absolute top-0 group open:flex justify-center items-center"
      >
        <form
          onSubmit={handleSubmit}
          className={
            "px-3 py-4 bg-white w-[500px] transition-all rounded-lg relative " +
            (open ? "scale-100" : "scale-0")
          }
        >
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setText("");
              setActive("");
            }}
            className="absolute -top-[15px] bg-white flex items-center justify-center left-[calc(100%-15px)] w-8 h-8 rounded-full"
          >
            <img src="/close.svg" alt="close" width={30} height={30} />
          </button>
          <h1 className="text-2xl text-black font-semibold text-center mb-3">
            Edit Todo
          </h1>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write todo's text..."
            className="w-full rounded-lg p-2 text-lg text-black font-semibold border-2 border-slate-200"
          />

          <AddBtn
            type="submit"
            onClick={() => {}}
            className=" block mx-auto mt-3"
          >
            Save todo
          </AddBtn>
        </form>
      </dialog>
    </>
  );
};

export default EditTodoModal;
