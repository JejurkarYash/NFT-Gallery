import React from "react";

const Buttons = ({ buttonText, children, ...props }) => {
  return <button {...props}>{children ? children : buttonText}</button>;
};

export default Buttons;
