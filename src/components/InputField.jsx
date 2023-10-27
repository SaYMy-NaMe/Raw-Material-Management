const InputField = ({ fieldName, placeholder, name, type }) => {
  return (
    <div id="inputField">
      <p>{fieldName}</p>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
