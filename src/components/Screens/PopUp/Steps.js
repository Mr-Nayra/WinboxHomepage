import React from "react";
import classes from "./Steps.module.css";
import Modal from "../../UI/Modal/Modal";
import { Heading327 } from "../../UI/Heading/Heading";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";

const StepsCont = (props) => {
  const [stepNumber, setStepNumber] = React.useState("1");

  const changeStep = (event) => {
    setStepNumber(event.currentTarget.value);
  };

  return (
    <Modal onClick={props.closePopUp} modalClass={props.modalClass}>
      <div className={classes.container}>
        <Heading327 className={classes.heading}>
          How to configure Gmail/Google Workspace?
        </Heading327>
        <div className={classes.flex}>
          <div
            style={{ backgroundColor: "#0415AA" }}
            className={classes.numbersContainer}
          >
            <p style={{ color: "white" }}>1</p>
          </div>
          <div
            className={classes.bar}
            style={{ backgroundColor: stepNumber > 1 ? "#0415AA" : "#D3D3D3" }}
          ></div>
          <div
            style={{ backgroundColor: stepNumber > 1 ? "#0415AA" : "#D3D3D3" }}
            className={classes.numbersContainer}
          >
            <p style={{ color: stepNumber > 1 ? "white" : "black" }}>2</p>
          </div>
          <div
            className={classes.bar}
            style={{ backgroundColor: stepNumber > 2 ? "#0415AA" : "#D3D3D3" }}
          ></div>
          <div
            style={{ backgroundColor: stepNumber > 2 ? "#0415AA" : "#D3D3D3" }}
            className={classes.numbersContainer}
          >
            <p style={{ color: stepNumber > 2 ? "white" : "black" }}>3</p>
          </div>
          <div
            className={classes.bar}
            style={{ backgroundColor: stepNumber > 3 ? "#0415AA" : "#D3D3D3" }}
          ></div>
          <div
            style={{ backgroundColor: stepNumber > 3 ? "#0415AA" : "#D3D3D3" }}
            className={classes.numbersContainer}
          >
            <p style={{ color: stepNumber > 3 ? "white" : "black" }}>4</p>
          </div>
        </div>
        {stepNumber === "1" && <Step1 onClick={changeStep} next="2" />}
        {stepNumber === "2" && <Step2 onClick={changeStep} prev="1" next="3" />}
        {stepNumber === "3" && <Step3 onClick={changeStep} prev="2" next="4" />}
        {stepNumber === "4" && (
          <Step4 onClick={changeStep} prev="3" close={props.closePopUp} />
        )}
      </div>
    </Modal>
  );
};

export default StepsCont;
