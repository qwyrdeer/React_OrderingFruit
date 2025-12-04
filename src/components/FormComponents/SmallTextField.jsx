import './SmallTextField.css';

function SmallTextField({fieldName, fieldData, fieldType, textValue, setTextValue}) {

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
