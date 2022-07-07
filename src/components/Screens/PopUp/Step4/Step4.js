import React, { useRef, useState } from "react";
import classes from "./Step4.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";
import Input from "../Elements/Input/Input";
import SucessMessage, { ErrorMessage } from "./ConnectionUpdate";
import url from "../../../../util/url";

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

    var request = new XMLHttpRequest();

    request.open("POST", url + "network/check_connection/");

    request.setRequestHeader("Content-Type", "application/json");

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        if (JSON.parse(this.responseText).status === "success") {
          setSucess(1);
          setTimeout(closeConnectionPopUp, 3000);
        } else {
          setError(1);
          setTimeout(setError.bind(this, 0), 3000);
          setLoader(0);
        }
      }
    };

    var body = JSON.stringify({
      email: email,
      password: password,
    });

    request.send(body);
  };

  return (
    <>
      {sucess == 1 && <SucessMessage />}
      {error == 1 && <ErrorMessage />}
      <div className={classes.container}>
        <p className={classes.parah} style={{ marginBottom: "1vh" }}>
          Just type your email in the username field and copy the app password
          which you created earlier in the password field.
        </p>
        <p className={classes.parah}>
          Click submit if you did everything right you will get a successful
          connection message or you may need to make sure that you followed all
          the steps correctly.
        </p>
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
          <p className={classes.error}>
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
