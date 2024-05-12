import { FormEvent, useContext, useState } from "react";
import AddBtn from "./AddBtn";
import { ITodo } from "../types/types";
import { v4 as uuid } from "uuid";
import FilterContext from "../context/filterContext";
import { Toaster, toast } from "sonner";

const AddTodoModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (a: boolean) => void;
}) => {
  const [text, setText] = useState("");
  const { setTodos, todos } = useContext(FilterContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    let time: string = "";
    time =
      time + (date.getHours() > 9 ? date.getHours() : "0" + date.getHours());
    time =
      time +
      ":" +
      (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
    time = time + " " + (date.getHours() > 12 ? "PM" : "AM") + " ";

    time =
      time + (date.getDay() > 9 ? date.getDay() : "0" + date.getDay()) + "/";
    time =
      time +
      (date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()) +
      "/";

    time =
      time +
      (date.getFullYear() > 9 ? date.getFullYear() : "0" + date.getFullYear());

    const newTodo: ITodo = {
      text,
      completed: false,
      date: time,
      id: uuid(),
    };
    if (text.length) setTodos([...todos, newTodo]);
    if (text.length) setOpen(false);
    if (text.length) setText("");
    if (text.length) toast.success("You added new Todo!");
    if (!text.length) toast.warning("Must be todo's text length 8");
  };
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
            }}
            className="absolute -top-[15px] bg-white flex items-center justify-center left-[calc(100%-15px)] w-8 h-8 rounded-full"
          >
            <img src="/close.svg" alt="close" width={30} height={30} />
          </button>
          <h1 className="text-2xl text-black font-semibold text-center mb-3">
            Add Todo
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

export default AddTodoModal;
