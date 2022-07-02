import React from "react";
import classes from "./Homepage.module.css";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Significance from "./Significance/Significance";
import Working from "./Working/Working";
import Carousel from "./Carousel/Carousel";
import Why from "./Why/Why";
import Steps from "./Steps/Steps";
import StepCont from "../PopUp/Steps";
import Footer from "./Footer/Footer";

const Report = (props) => {
  const [showPopUp, setShowPopUp] = React.useState(0);
  const [showSucessPopUp, setShowSucessPopUp] = React.useState(0);

  const renderPopUp = () => {
    setShowPopUp("1");
  };

  const closePopUp = () => {
    setShowPopUp("0");
  };

  return (
    <>
      {showPopUp === "1" && <StepCont closePopUp={closePopUp} />}
      <div className={classes.container}>
        <Header onClick={renderPopUp} />
        <Hero />
        <Carousel />
        <Significance />
        <Working />
        <Steps />
        <Why />
        <Footer />
      </div>
    </>
  );
};

export default Report;
