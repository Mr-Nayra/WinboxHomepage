import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from "./owl.module.css";
import "./owl.css";

const Owl = (props) => {
  return (
    <div className={classes.container}>
      <React.StrictMode>
        <OwlCarousel
          className={`owl-theme  ${classes.div} `}
          loop={true}
          margin={10}
          autoWidth
          dots={false}
          nav
          navElement="div"
          navText={[
            '<div style="width:24px;height:24px;border-radius:100%;display:flex;align-items:center;justify-content:center"><p style="margin:0;font-weight:600;font-size:18px;"><</div>',
            '<div style="width:24px;height:24px;border-radius:100%;display:flex;align-items:center;justify-content:center"><p style="margin:0;font-weight:600;font-size:18px;">></div>',
          ]}
        >
          <div className={classes.card}>
            <img
              src={require("./Icons/Gmail.png")}
              alt="banner"
              className={classes.img}
            />
          </div>
          <div className={classes.card}>
            <img
              src={require("./Icons/Outlook.png")}
              alt="banner"
              className={classes.img}
            />
          </div>
          <div className={classes.card}>
            <img
              src={require("./Icons/Yahoo.png")}
              alt="banner"
              className={classes.img}
            />
          </div>
          <div className={classes.card}>
            <img
              src={require("./Icons/Outlook.png")}
              alt="banner"
              className={classes.img}
            />
          </div>
        </OwlCarousel>
      </React.StrictMode>
    </div>
  );
};

export default Owl;
