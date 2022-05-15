import React from "react";
import classes from "./Step1.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";

const Step1 = (props) => {
  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.headingparah}>
          Allow Less Secure Apps on your mailbox
        </h3>
        <p className={classes.parah}>
          To allow less secure apps{" "}
          <a href="https://myaccount.google.com/lesssecureapps">Click here</a>
        </p>
        <img
          src={require("./Step1.png")}
          alt="Allow Less Secure Apps on your mailbox"
          className={classes.img}
        />
      </div>
      <div className={classes.flexend}>
        <Button className={classes.btn} onClick={props.onClick} value={props.next}>Next</Button>
      </div>
    </>
  );
};

export default Step1;
