import { ChangeEvent, useRef } from "react";
import { FilterT } from "../types/types";

const Filter = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (a: FilterT) => void;
}) => {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(filter);

    let value = e.target.value;
    let valueType: FilterT =
      value === "all"
        ? "all"
        : value === "completed"
        ? "completed"
        : "uncompleted";
    setFilter(valueType);
  };

  return (
    <select
      onChange={handleChange}
      ref={selectRef}
      className="p-2 bg-slate-200 rounded-lg text-lg font-semibold text-black transition-all"
    >
      <option value="all">All</option>
      <option value="completed">Compeleted</option>
      <option value="nocompleted">No Completed</option>
    </select>
  );
};

export default Filter;
