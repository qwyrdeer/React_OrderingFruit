import './SmallTextField.css';
import {useState} from "react";

function SmallTextField({fieldName, fieldData, fieldType}) {

const [textValue, setTextValue] = useState('');

return (
  <>
      <div>
      <label htmlFor={fieldData}>
          {fieldName}
      </label>
      <input
          id={fieldData}
          type={fieldType}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
      />
      </div>
  </>

);
}
export default SmallTextField;
