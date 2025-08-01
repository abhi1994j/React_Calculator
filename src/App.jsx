import { useState } from "react";
import { evaluate, string } from "mathjs";

function App() {
  const [value, setValue] = useState("0");

  function expressionChange(val) {
    return val.replace(/×/g, "*").replace(/÷/g, "/");
  }

  function displayValue(e) {
    const currentValue = e.target.textContent;
    if (currentValue === ".") {
      // Get the current number segment (after the last operator)
      const lastNumberSegment = value
        .toString()
        .split(/[\+\-\*\/]/)
        .pop();
      // console.log(lastNumberSegment);
      if (lastNumberSegment.includes(".")) return; // Prevent multiple decimals
    }

    setValue((prevValue) =>
      prevValue === "0" && currentValue !== "."
        ? currentValue
        : prevValue + currentValue
    );
  }

  // console.log(value.length);

  function handleCE() {
    if (value.length === 0 || value === "0") {
      setValue("0");
    } else if (value.length === 1) {
      setValue("0");
    } else {
      setValue(value.slice(0, -1));
    }
  }

  return (
    <>
      <div className="container flex flex-col gap-4 w-[90%] max-w-[350px] bg-indigo-200 p-5 rounded-lg shadow-xl">
        <div className="w-full flex justify-center items-center mb-2">
          <input
            type="text"
            id="inputVal"
            value={value}
            readOnly
            className="bg-gray-900 w-full h-[70px] overflow-hidden text-white text-4xl rounded-lg px-2 text-right shadow-md"
          />
        </div>

        <div className="btn-container grid grid-cols-4 gap-3">
          <button
            className="btn bg-indigo-300 text-gray-900 p-4 rounded-lg transition-all hover:bg-indigo-400 hover:text-white active:bg-indigo-600 active:text-white"
            onClick={() => setValue(0)}
          >
            AC
          </button>
          <button
            className="btn bg-indigo-300 text-gray-900 p-4 rounded-lg transition-all hover:bg-indigo-400 hover:text-white active:bg-indigo-600 active:text-white"
            onClick={handleCE}
          >
            CE
          </button>
          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            %
          </button>
          <button
            className="btn bg-indigo-600 text-white p-4 rounded-lg transition-all hover:bg-indigo-700 active:bg-indigo-800 active:text-white"
            onClick={displayValue}
          >
            ÷
          </button>

          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            7
          </button>
          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            8
          </button>
          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            9
          </button>
          <button
            className="btn bg-indigo-600 text-white p-4 rounded-lg transition-all hover:bg-indigo-700 active:bg-indigo-800 active:text-white"
            onClick={displayValue}
          >
            ×
          </button>

          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            4
          </button>
          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            5
          </button>
          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            6
          </button>
          <button
            className="btn bg-indigo-600 text-white p-4 rounded-lg transition-all hover:bg-indigo-700 active:bg-indigo-800 active:text-white"
            onClick={displayValue}
          >
            -
          </button>

          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            1
          </button>
          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            2
          </button>
          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            3
          </button>
          <button
            className="btn bg-indigo-600 text-white p-4 rounded-lg transition-all hover:bg-indigo-700 active:bg-indigo-800 active:text-white"
            onClick={displayValue}
          >
            +
          </button>

          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg col-span-2 transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            0
          </button>
          <button
            className="btn bg-white text-gray-900 p-4 rounded-lg transition-all hover:bg-gray-200 active:bg-gray-400 active:text-white"
            onClick={displayValue}
          >
            .
          </button>
          <button
            className="btn bg-indigo-600 text-white p-4 rounded-lg transition-all hover:bg-indigo-700 active:bg-indigo-800 active:text-white"
            onClick={() => {
              setValue(string(evaluate(expressionChange(value))));
            }}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
