import React from "react";
import classes from "./Step3.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";

const Step3 = (props) => {
  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.headingparah}>Optional - if the first 2 steps do not work</h3>
          <p className={classes.parah}>
            Please{" "}
            <a href="https://g.co/allowaccess">Click here</a>
          </p>
        <img
          src={require("./Step3.png")}
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

export default Step3;
