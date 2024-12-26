const ResultDisplay = ({
  number,
  selectNumber = 0,
}: {
  number: number;
  selectNumber: number;
}) => {
  return (
    <div className="w-full py-8 px-7 bg-white/40 border flex justify-end rounded-md flex-col">
      <span className="text-2xl text-end">{number}</span>
      <span className="text-2xl text-black/20 text-end">{selectNumber}</span>
    </div>
  );
};

export default ResultDisplay;
