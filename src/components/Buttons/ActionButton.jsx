
import React from "react";

function ActionButton ({handleClick, buttonName}) {
return (
  <>
      <button
          type="button"
          onClick={handleClick}
      >
          {buttonName}
      </button>
  </>
);
}
export default ActionButton;
