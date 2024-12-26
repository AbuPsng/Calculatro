const NumberButton = ({
  number,
  handleSelect,
}: {
  number: number;
  handleSelect: (number: number) => void;
}) => {
  return (
    <button
      onClick={() => handleSelect(number)}
      className="p-5 w-[70px] h-[70px] text-xl font-semibold border"
    >
      {number}
    </button>
  );
};

export default NumberButton;
