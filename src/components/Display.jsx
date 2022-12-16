import React from "react";

export default function Display({ input, output }) {
  return (
    <section id="display-container">
      <span className="output">{output}</span>
      <span id="display" className="input">
        {input}
      </span>
    </section>
  );
}
