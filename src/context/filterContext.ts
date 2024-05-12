import { createContext } from "react";
import { FilterT, ITodo } from "../types/types";

const FilterContext = createContext({
  filter: "all",
  setFilter: (a: FilterT) => {
    console.log(a);
  },
  todos: [
    {
      date: "14:00 PM  01/05/2034",
      id: "salom",
      text: "hello",
      completed: false,
    },
  ],
  setTodos: (a: ITodo[]) => {
    console.log(a);
  },
});

export default FilterContext;
