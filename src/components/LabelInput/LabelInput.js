import React from "react";

const LabelInput = ({ title, type, id, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default LabelInput;
