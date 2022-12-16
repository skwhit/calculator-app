import React from "react";
import Key from "./Key";

export default function Keyboard({ handleInput, calcData }) {
  return (
    <section id="keyboard">
      {calcData.map((item) => (
        <Key
          key={item.id}
          keyData={item}
          handleInput={handleInput}
          keypress={item.keypress}
        />
      ))}
    </section>
  );
}
