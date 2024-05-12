import { ReactNode } from "react";

const Paragraph = ({
  children,
  completed,
  onClick,
  className,
}: {
  children: ReactNode;
  completed?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <p
      onClick={onClick}
      className={
        "text-base text-gray-800 font-semibold leading-none select-none " +
        (completed ? "line-through " : "") +
        className
      }
    >
      {children}
    </p>
  );
};

export default Paragraph;
