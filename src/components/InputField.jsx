const InputField = ({
  type,
  name,
  fieldName,
  placeholder,
  errorTxt,
  value,
  onChange,
  ...rst
}) => {
  return (
    <div id="inputField">
      <p>{fieldName}</p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        {...rst}
      />
      {errorTxt && <p style={{ color: "red" }}>{errorTxt}</p>}
    </div>
  );
};

export default InputField;
