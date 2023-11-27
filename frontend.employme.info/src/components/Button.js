import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-primary"
    >
      {text}
    </button>
  );
};

export default Button;
