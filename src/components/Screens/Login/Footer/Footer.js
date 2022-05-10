import classes from "./Footer.module.css";
import Logo from "../../../Icons/Logo";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import YoutubeIcon from "./Icons/YoutubeIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import { Container } from "../../../UI/Card/Card"

const Hero = (props) => {
  return (
    <>
      <div className={classes.container}>
      <Container style={{display:"block"}}>
        <a>
          <Logo
            className={classes.logo}
            color="#fff"
            height="10vh"
            width="12.5vw"
          />
        </a>
        <p className={classes.parah}>
          We help businesses to reach their leads by increasing their cold
          emails deliverability.
        </p>
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
        <p className={classes.copyrighttext}>
          © Copyright 2022 | All rights reserved by Winbox
        </p>
      </div>
    </>
  );
};

export default Hero;
