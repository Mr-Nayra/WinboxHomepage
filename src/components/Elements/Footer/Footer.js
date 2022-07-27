import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import { Heading186 } from "../../UI/Heading/Heading";
import Logo from "../../Icons/Logo";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import YoutubeIcon from "./Icons/YoutubeIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import { Container } from "../../UI/Card/Card";

const Footer = (props) => {
  return (
    <>
      <div className={classes.container}>
        <Container
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div className={classes.cont1}>
            <Link to="/home">
              <Logo
                className={classes.logo}
                color="#fff"
                height="10vh"
                width="12.5vw"
              />
            </Link>
            <p className={classes.parah}>
              We help businesses to reach their leads by increasing their cold
              emails deliverability.
            </p>
          </div>
          <div className={classes.linkcont}></div>
          {/*<div className={classes.links}>
          <a>
            <FacebookIcon />
          </a>
          <a>
            <InstagramIcon />
          </a>
          <a>
            <TwitterIcon />
          </a>
          <a>
            <LinkedInIcon />
          </a>
          <a>
            <YoutubeIcon />
          </a>
        </div>*/}
        </Container>
      </div>
      <div className={classes.container2}>
        <div>
          <Link to="/privacy-policy" className={classes.link}>
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms-conditions" className={classes.link}>
            Terms And Conditions
          </Link>
        </div>
        <p className={classes.link}>
          © Copyright 2022 | All rights reserved by Winbox
        </p>
      </div>
    </>
  );
};

export default Footer;
