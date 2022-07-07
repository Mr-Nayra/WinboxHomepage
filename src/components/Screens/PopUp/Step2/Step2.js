import React from "react";
import classes from "./Step2.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";

const Step2 = (props) => {
  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.headingparah}>Generate App Password</h3>
        <p className={classes.parah} style={{ marginBottom: "1vh" }}>
          Next, click on the app passwords below and Turn on 2 step verification
          setting.
        </p>
        <p className={classes.parah}>
          On the new screen, you will see some dropdowns click on select app
          dropdown and select the option Other( Custom Name), next in the new
          input field type the name “winbox” and click on generate. You will now
          have an app password (highlighted in yellow) copy it and save it we
          will need it ahead.
        </p>
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

export default Step2;
