import { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [result, setResult] = useState<number>(0);
  const [selectedNumber, setSelectedNumber] = useState<number>(0);

  const handleSelect = (number: number) => {
    if (result === 0) {
      setResult(number);
      return;
    }
    if (selectedNumber) {
      console.log(number, "number");
      const newNumber = number.toString();
      console.log(newNumber, "newNumber");
      setSelectedNumber((prev) => Number(prev + newNumber));
    }
    setSelectedNumber(number);
  };

  const handleOperations = ({
    number,
    type,
  }: {
    number: number;
    type: string;
  }) => {
    if (type === "+") {
      setResult((prev) => prev + number);
    }
    if (type === "-") {
      setResult((prev) => prev - number);
    }
    if (type === "x") {
      setResult((prev) => prev * number);
    }
    if (type === "/") {
      setResult((prev) => prev / number);
    }
    setSelectedNumber(1);
  };

  return (
    <main className="flex justify-center items-center w-full bg-black/80 h-screen">
      <div className="w-[500px] h-[700px] bg-orange-500 rounded-t-md flex flex-col py-5 px-2 items-center gap-y-12">
        <ResultDisplay number={result} selectNumber={selectedNumber} />
        <ButtonContainer
          currentNumber={selectedNumber}
          operatorFun={handleOperations}
          numberFunc={handleSelect}
        />
      </div>
    </main>
  );
}

export default App;
