import React from "react";

const Button = ({ bgColor, textColor, children, className }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
