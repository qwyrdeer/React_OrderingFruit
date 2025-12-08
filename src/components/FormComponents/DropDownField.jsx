import './DropDownField.css';

function DropDownField({fieldName, fieldOptions, fieldData, handleClick}) {

    return (
  <>
      <select name={fieldName} id={fieldData} onChange={(e) => handleClick(e.target.value)}>
          {/* eslint-disable-next-line react/prop-types */}
          {fieldOptions.map((option) =>
          <option value={option} key={option.toString()}>
            {option}
          </option>)}
      </select>
  </>

);
}

export default DropDownField;
