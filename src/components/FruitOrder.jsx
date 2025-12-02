// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

function FruitOrder({fruitCounter, setFruitCounter, fruitName}) {

return (
    <>
        <div>
            {fruitName}
        <button
            type="button"
            onClick={() => setFruitCounter(fruitCounter + 1)}
        >+</button>

          {fruitCounter}

          <button
              type="button"
              disabled={fruitCounter === 0}
              onClick={() => setFruitCounter(fruitCounter -1) }
          >-</button>
        </div>
    </>
);

}

export default FruitOrder;
