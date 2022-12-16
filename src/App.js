import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import {
  replaceAt,
  calcData,
  operators,
  numbers,
  keypresses,
} from "./utils/functions";

String.prototype.replaceAt = replaceAt;

function App() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [expression, setExpression] = useState("");

  const handleKeydown = (e) => {
    const keypress = keypresses.find((keypress) => keypress === e.key);
    const index = keypresses.indexOf(keypress);
    const id = calcData[index].id;

    if (keypress) {
      document.getElementById(id).click();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  });

  const handleSubmit = () => {
    const solution = eval(expression);
    setInput(`${solution}`);
    setOutput(`${expression}=`);
    setExpression(`${solution}`);
  };

  const handleClear = () => {
    setInput("0");
    setOutput("");
    setExpression("");
  };

  const handleNumbers = (value) => {
    if (expression === "") {
      setInput(`${value}`);
      setExpression(`${value}`);
      setOutput(`${value}`);
    } else if (value === 0 && input === "0") {
      setInput("0");
    } else if (input === "0" || isNaN(input)) {
      setInput(`${value}`);
      setExpression(`${expression}${value}`);
      setOutput(`${expression}${value}`);
    } else {
      setInput(`${input}${value}`);
      setExpression(`${expression}${value}`);
      setOutput(`${expression}${value}`);
    }
  };

  const handleDotOperator = () => {
    if (!/\./.test(input) || !/\./.test(expression)) {
      setInput(`${input}.`);
      setExpression(`${expression}.`);
    }
  };

  const handleOperators = (value) => {
    const lastChar = expression.charAt(expression.length - 1);
    const isOperator = operators.some((op) => op === lastChar);
    const secondToLastChar = expression.charAt(expression.length - 2);
    const secondToLastIsOperator = operators.some(
      (op) => op === secondToLastChar
    );
    if (isOperator && secondToLastIsOperator) {
      setExpression(expression.replaceAt(expression.length - 2, value, 2));
      setOutput(expression.replaceAt(expression.length - 2, value, 2));
    } else if (isOperator && value !== "-") {
      setExpression(expression.replaceAt(expression.length - 1, value, 1));
      setOutput(expression.replaceAt(expression.length - 1, value, 1));
    } else {
      setExpression(`${expression}${value}`);
      setOutput(`${expression}${value}`);
    }
    setInput(value);
  };

  const handleInput = (value) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);

    switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case ".":
        handleDotOperator();
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  };

  return (
    <main id="app">
      <Display input={input} output={output} />
      <Keyboard handleInput={handleInput} calcData={calcData} />
    </main>
  );
}

export default App;
