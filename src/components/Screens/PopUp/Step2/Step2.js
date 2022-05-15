import React from "react";
import classes from "./Step2.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";

const Step2 = (props) => {
  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.headingparah}>Enable IMAP</h3>
        <img
          src={require("./Step2.png")}
          alt="Laptop with winbox logo"
          className={classes.img}
        />
      </div>
      <div className={classes.flexside}>
        <Button2 className={classes.btn} onClick={props.onClick} value={props.prev}>Back</Button2>
        <Button className={classes.btn} onClick={props.onClick} value={props.next}>Next</Button>
      </div>
    </>
  );
};

export default Step2;
