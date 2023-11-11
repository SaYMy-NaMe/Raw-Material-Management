const InputField = ({
  fieldName,
  placeholder,
  name,
  type,
  value,
  onChange,
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
      />
    </div>
  );
};

export default InputField;
