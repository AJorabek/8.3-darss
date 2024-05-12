import { useContext, useState } from "react";
import AddBtn from "./AddBtn";
import Filter from "./Filter";
import FilterContext from "../context/filterContext";
import { createPortal } from "react-dom";
import AddTodoModal from "./AddTodoModal";

const Navbar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full mt-10 flex justify-between items-between">
        <AddBtn onClick={() => setOpen(true)}>add task</AddBtn>
        <Filter filter={filter} setFilter={setFilter} />
      </nav>

      {createPortal(
        <AddTodoModal open={open} setOpen={setOpen} />,
        document.body
      )}
    </>
  );
};

export default Navbar;
