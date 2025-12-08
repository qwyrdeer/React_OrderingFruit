
import React from "react";

function ActionButton ({handleClick, buttonName, type}) {
return (
  <>
      <button
          type={type}
          onClick={handleClick}
      >
          {buttonName}
      </button>
  </>
);
}
export default ActionButton;
