import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import Paragraph from "./Paragraph";
import Actions from "./Actions";
import { IMTodo } from "../types/types";

const SingleTodo = ({
  date,
  setTodos,
  setActive,
  id,
  text,
  completed,
  todos,
}: IMTodo) => {
  const [check, setCheck] = useState(completed);
  useEffect(() => {
    const editTodo = {
      date,
      text,
      completed: check,
      id,
    };
    setTodos(
      todos.map((e) => {
        if (e.id !== id) return e;
        return editTodo;
      })
    );
  }, [check]);
  return (
    <article className="flex justify-between bg-white rounded-lg px-3 py-2 items-center">
      <article className="flex gap-3 items-center">
        <CheckBox check={check} setCheck={setCheck} />
        <article className="grid gap-1">
          <Paragraph completed={check}>{text}</Paragraph>
          <Paragraph>{date}</Paragraph>
        </article>
      </article>
      <Actions
        id={id}
        setTodos={setTodos}
        todos={todos}
        setActive={setActive}
      />
    </article>
  );
};

export default SingleTodo;
