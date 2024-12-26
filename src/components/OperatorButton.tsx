const OperatorButton = ({
  operator,
  number,
  handleOperation,
}: {
  operator: string;
  number: number;
  handleOperation: ({ number, type }: { number: number; type: string }) => void;
}) => {
  return (
    <button
      onClick={() => handleOperation({ number, type: operator })}
      className="p-5 w-[70px] h-[70px] text-xl font-semibold border"
    >
      {operator}
    </button>
  );
};

export default OperatorButton;
