import React from "react";
import classes from "./Step4.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";
import Input from "../../../Elements/Input/Input";
import SucessMessage from "./ConnectionUpdate";

const Step4 = (props) => {
  const [loader, setLoader] = React.useState(0);
  const [error, setError] = React.useState(0);
  const [sucess, setSucess] = React.useState(0);

  const closeConnectionPopUp = () => {
    setSucess(0);
    props.close();
  }

  const check = () => {
    setLoader(1);
    setSucess(1);
    setTimeout(closeConnectionPopUp, 1500);
  };

  return (
    <>
    {sucess == 1 && <SucessMessage/>}
      <div className={classes.container}>
        <h3 className={classes.headingparah}>Check Connection</h3>
        <Input>Email</Input>
        <Input>Password</Input>
      {loader ? (
          <div className={classes.loading}></div>
        ) : (
          <Button className={classes.btn2} onClick={check}>
            Check Connection
          </Button>
        )}
        {error == 1 && <p className={classes.parah}>Oops! Something went wrong, kindly make sure that you followed all the steps correctly</p>}
      </div>
      <div className={classes.flexside}>
        <Button2
          className={classes.btn}
          onClick={props.onClick}
          value={props.prev}
        >
          Back
        </Button2>
        <Button className={classes.btn} onClick={props.close}>
          Close
        </Button>
      </div>
    </>
  );
};

export default Step4;
