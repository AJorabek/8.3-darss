import { ReactNode } from "react";

const AddBtn = ({
  children,
  onClick,
  className,
  type,
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  type?: "submit" | "button" | "reset";
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={
        "bg-blue-600 py-2 px-5 rounded-lg text-white text-lg font-semibold capitalize transition-all shadow active:scale-90 " +
        className
      }
    >
      {children}
    </button>
  );
};

export default AddBtn;
