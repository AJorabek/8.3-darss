const CheckBox = ({
  check,
  setCheck,
}: {
  check: boolean;
  setCheck: (a: boolean) => void;
}) => {
  const handleChange = () => {
    setCheck(!check);
  };
  return (
    <article className="w-8 h-8 bg-slate-200 rounded-lg" onClick={handleChange}>
      {check && (
        <img src="/check.svg" alt="icon" className="scale-75 cursor-pointer" />
      )}
    </article>
  );
};

export default CheckBox;
