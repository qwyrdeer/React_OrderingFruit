import './LargeTextField.css';

function LargeTextField({fieldName, fieldData, textValue, setTextValue, sizeInRows}) {
return (
  <>
      <div>
      <label htmlFor={fieldData}>
          {fieldName}
      </label>
          <div>
      <textarea
          id={fieldData}
          value={textValue}
          rows={sizeInRows}
          onChange={(e) => setTextValue(e.target.value)}
      />
          </div>
      </div>
  </>
);
}
export default LargeTextField;
