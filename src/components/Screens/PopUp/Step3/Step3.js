import React from "react";
import classes from "./Step3.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";

const Step3 = (props) => {
  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.headingparah}>Enable IMAP</h3>
        <p className={classes.parah} style={{ marginBottom: "0.5vh" }}>
          Go to this link{" "}
          <a
            href="https://mail.google.com/mail/u/0/#settings/fwdandpop"
            target="_blank"
          >
            Click here
          </a>
        </p>
        <p className={classes.parah}>And enable the IMAP access setting.</p>
        <img
          src={require("./Step3.png")}
          alt="Laptop with winbox logo"
          className={classes.img}
        />
      </div>
      <div className={classes.flexside}>
        <Button2
          className={classes.btn}
          onClick={props.onClick}
          value={props.prev}
        >
          Back
        </Button2>
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

export default Step3;
