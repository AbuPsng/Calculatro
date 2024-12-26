import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ["+", "-", "x", "/"];

const ButtonContainer = ({
  operatorFun,
  currentNumber,
  numberFunc,
}: {
  currentNumber: number;
  operatorFun: ({ number, type }: { number: number; type: string }) => void;
  numberFunc: (number: number) => void;
}) => {
  return (
    <div className="h-full w-full flex gap-x-2">
      <div className="w-3/4 border py-4 px-2 rounded-md flex flex-wrap gap-4">
        {numbers.map((number) => (
          <NumberButton
            key={number}
            number={number}
            handleSelect={numberFunc}
          />
        ))}
      </div>
      <div className="w-1/4 border py-4 px-2 rounded-md flex  items-center justify-center flex-wrap gap-4">
        {operators.map((operator) => (
          <OperatorButton
            key={operator}
            number={currentNumber}
            operator={operator}
            handleOperation={operatorFun}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
