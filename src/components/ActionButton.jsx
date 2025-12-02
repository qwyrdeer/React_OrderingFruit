
import React from "react";

function ActionButton ({handleClick, buttonName}) {
return (
  <>
      <button
          type="reset"
          onClick={handleClick}
      >
          {buttonName}
      </button>
  </>
);
}
export default ActionButton;
