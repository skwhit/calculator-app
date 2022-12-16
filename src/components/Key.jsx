import React from "react";

export default function Key({
  keyData: { id, value, display, keypress },
  handleInput,
}) {
  return (
    <div key={id} className="key-container" id={`${id}-container`}>
      <button
        className={keypress}
        key={id}
        onClick={() => handleInput(value)}
        id={id}
      >
        {display}
      </button>
    </div>
  );
}
