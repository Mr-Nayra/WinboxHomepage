import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className}  ${classes.button} `}
      onClick={props.onClick}
      disabled={props.disabled}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export const Link = (props) => {
  return (
    <a
      className={`${props.className}  ${classes.button} `}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default Button;
