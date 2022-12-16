export const calcData = [
    { id: "clear", value: "AC", display: "AC", keypress: "Delete" },
    { id: "divide", value: "/", display: "/", keypress: "/" },
    { id: "multiply", value: "*", display: "x", keypress: "*" },
    { id: "seven", value: 7, display: 7, keypress: "7" },
    { id: "eight", value: 8, display: 8, keypress: "8" },
    { id: "nine", value: 9, display: 9, keypress: "9" },
    { id: "subtract", value: "-", display: "-", keypress: "-" },
    { id: "four", value: 4, display: 4, keypress: "4" },
    { id: "five", value: 5, display: 5, keypress: "5" },
    { id: "six", value: 6, display: 6, keypress: "6" },
    { id: "add", value: "+", display: "+", keypress: "+" },
    { id: "one", value: 1, display: 1, keypress: "1" },
    { id: "two", value: 2, display: 2, keypress: "2" },
    { id: "three", value: 3, display: 3, keypress: "3" },
    { id: "equals", value: "=", display: "=", keypress: "Enter" },
    { id: "zero", value: 0, display: 0, keypress: "0" },
    { id: "decimal", value: ".", display: ".", keypress: "." }
  ];
  
  export const operators = ["AC", "/", "*", "+", "-", "="];
  export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  export const keypresses = ["Delete", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "Enter", "0", "."]
  
  export function replaceAt (index, replacement, replacementLength) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacementLength)
    );
  };