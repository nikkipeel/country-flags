import React from "react";

const StyledButton = ({ text, onClick, type }) => (
  <button class="cf-button" type={type || "button"} onClick={onClick}>
    {text}
  </button>
);

export default StyledButton;
