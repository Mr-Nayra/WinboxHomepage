import React, { useRef, useState } from "react";
import classes from "./Step4.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";
import Input from "../Elements/Input/Input";
import SucessMessage, { ErrorMessage } from "./ConnectionUpdate";

const Step4 = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = React.useState(0);
  const [error, setError] = React.useState(0);
  const [sucess, setSucess] = React.useState(0);

  const closeConnectionPopUp = () => {
    setSucess(0);
    props.close();
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const check = () => {
    setLoader(1);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://44.203.4.229/result", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (JSON.parse(result).Status === "Success") {
          setSucess(1);
          setTimeout(closeConnectionPopUp, 3000);
        } else {
          setError(1);
          setTimeout(setError.bind(this, 0), 3000);
          setLoader(0);
        }
      })
      .catch((error) => {
        setTimeout(setError.bind(this, 0), 3000);
        setLoader(0);
      });
  };

  return (
    <>
      {sucess == 1 && <SucessMessage />}
      {error == 1 && <ErrorMessage />}
      <div className={classes.container}>
        <h3 className={classes.headingparah}>Check Connection</h3>
        <Input required={true} value={email} onChange={emailChangeHandler}>
          Email
        </Input>
        <Input
          required={true}
          value={password}
          onChange={passwordChangeHandler}
        >
          Password
        </Input>
        {loader ? (
          <div className={classes.flexrow}>
            <div className={classes.loading}></div>
            <p className={classes.loadingparah}>Verifying...Please wait.</p>
          </div>
        ) : (
          <Button className={classes.btn2} onClick={check}>
            Check Connection
          </Button>
        )}
        {error == 1 && (
          <p className={classes.parah}>
            Oops! Something went wrong, kindly make sure that you followed all
            the steps correctly
          </p>
        )}
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
