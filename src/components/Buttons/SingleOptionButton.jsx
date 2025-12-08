import './SingleOptionButton.css';

function SingleOptionButton({fieldName, fieldOption, fieldType, handleClick}) {

    return (
  <>
      <label >
          <input
              type={fieldType}
              name={fieldName}
              value={fieldOption}
              onChange={(e) => handleClick(e.target.value)}
          /> {fieldOption}
      </label>
  </>
);
}

export default SingleOptionButton;
