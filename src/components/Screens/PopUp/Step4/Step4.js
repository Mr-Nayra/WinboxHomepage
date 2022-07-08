import React, { useState } from "react";
import classes from "./Step4.module.css";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/BlueButton/Button";
import Input from "../../../Elements/Input/Input";
import Message from "./ConnectionUpdate";
import url from "../../../../util/url";

const Step4 = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = React.useState(0);
  const [error, setError] = React.useState(0);
  const [exists, setExists] = React.useState(0);
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

    var formdata = new FormData();
    formdata.append("username", email);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "/network/check_connection/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (JSON.parse(result).status === "success") {
          setSucess(1);
          setTimeout(closeConnectionPopUp, 3000);
        } else if (JSON.parse(result).status === "exist") {
          setExists(1);
          setTimeout(closeConnectionPopUp, 3000);
        } else {
          setError(1);
          setTimeout(setError.bind(this, 0), 3000);
          setLoader(0);
        }
      })
      .catch(() => {
        setError(1);
        setTimeout(setError.bind(this, 0), 3000);
        setLoader(0);
      });
  };

  return (
    <>
      {sucess === 1 && <Message parah="Connection Successfull"></Message>}
      {exists === 1 && <Message parah="This email already exists"></Message>}
      {error === 1 && (
        <Message
          parah="Oops! Something went wrong, kindly make sure that you followed all the
        steps correctly"
          error
        ></Message>
      )}
      <div className={classes.container}>
        <p className={classes.parah}>
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
          type="password"
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
