import './.css';

import React from "react";
function CounterButton ({buttonText}) {
return (
  <>
      <button
          type="button"
          buttonText=
          onClick={() => setFruitCounter(fruitCounter + 1)}
      >
          +
      </button>
  </>
);
}
export default CounterButton;
