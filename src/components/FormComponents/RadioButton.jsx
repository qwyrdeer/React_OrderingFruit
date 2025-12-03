import './RadioButton.css';
import {useState} from "react";
function RadioButton({fieldName, fieldOptions}) {

    const [activeOption, toggleActiveOption] = useState(null);

    return (
  <>
      {fieldOptions.map((option) => (
          <div key={option.toString()}>
              <input
                  id={`${fieldName}-${option}`}
                  type="radio"
                  checked={activeOption === option}
                  onChange={() => toggleActiveOption(option)}
              />
              <label htmlFor={`${fieldName}-${option}`}>
                  {option}
              </label>
          </div>
      ))}
  </>
);
}

export default RadioButton;
