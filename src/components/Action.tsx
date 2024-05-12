const Action = ({ url, onClick }: { url: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 p-2 rounded-lg flex justify-center items-center bg-slate-200 transition-all active:scale-90"
    >
      <img src={url} alt="icon" />
    </button>
  );
};

export default Action;
