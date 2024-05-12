import { useEffect, useState } from "react";
import FilterContext from "./context/filterContext";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { FilterT, ITodo } from "./types/types";
import { v4 as uuid } from "uuid";

function App() {
  const [filter, setFilter] = useState<FilterT>("all");
  const [todos, setTodos] = useState<ITodo[]>([
    {
      date: "14:00 PM  01/05/2034",
      id: uuid(),
      text: "hello",
      completed: false,
    },
  ]);
  useEffect(() => {
    const data = localStorage.getItem("todosContainer");
    data && setTodos(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("todosContainer", JSON.stringify(todos));
  }, [todos]);
  return (
    <FilterContext.Provider
      value={{ filter, setFilter: setFilter, todos, setTodos }}
    >
      <div className="h-full grid grid-rows-[auto_1fr] px-3 md:px-0">
        <Header />
        <Main />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
