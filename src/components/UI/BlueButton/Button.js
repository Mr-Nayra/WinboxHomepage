import React from 'react';
import classes from './Button.module.css';

const BlueButton = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${props.className} || ${classes.bluebutton} `}
      onClick={props.onClick}
      disabled={props.disabled}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default BlueButton;
