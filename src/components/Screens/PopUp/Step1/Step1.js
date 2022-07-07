import React from "react";
import classes from "./Step1.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";

const Step1 = (props) => {
  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.headingparah}>Turn on 2 step verification</h3>
        <p className={classes.parah} style={{ marginBottom: "1vh" }}>
          Go to this link{" "}
          <a href="https://myaccount.google.com/security" target="_blank">
            Click here
          </a>
        </p>
        <p className={classes.parah}>
          {" "}
          And Turn on 2 step verification under Signing in to google
        </p>
      </div>
      <div className={classes.flexend}>
        <Button
          className={classes.btn}
          onClick={props.onClick}
          value={props.next}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Step1;
