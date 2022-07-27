import React from "react";
import classes from "./Homepage.module.css";

import Hero from "./Hero/Hero";
import Significance from "./Significance/Significance";
import Working from "./Working/Working";
import Carousel from "./Carousel/Carousel";
import Why from "./Why/Why";
import Steps from "./Steps/Steps";

const Report = (props) => {
  return (
    <>
      <div className={classes.container}>
        <Hero />
        <Carousel />
        <Significance />
        <Working />
        <Steps />
        <Why />
      </div>
    </>
  );
};

export default Report;
