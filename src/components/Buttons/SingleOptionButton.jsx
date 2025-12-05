import './SingleOptionButton.css';

function SingleOptionButton({fieldName, fieldOption, fieldType, handleClick}) {

    return (
  <>
      <label>
          <input
              type={fieldType}
              name={fieldName}
              value={fieldOption}
              onClick={() => handleClick}
          /> {fieldOption}
      </label>
  </>
);
}

export default SingleOptionButton;
