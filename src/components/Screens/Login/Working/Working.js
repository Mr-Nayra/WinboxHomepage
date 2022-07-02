import classes from "./Working.module.css";
import { Heading447 } from "../../../UI/Heading/Heading";
import Card from "../../../UI/Card/Card";

import { Container } from "../../../UI/Card/Card";

const Hero = (props) => {
  return (
    <div className={classes.container}>
      <Container style={{ flexDirection: "column" }}>
        <Card className={classes.container}>
          <Heading447 className={classes.heading}>How does it work?</Heading447>
          <p className={classes.headingparah}>
            Winbox delivers emails from your inbox automatically and interacts
            with them as if they were excellent leads, increasing your email
            deliverability.
          </p>
        </Card>
        <section class="al_video_section">
          <div class="container">
            <div className={classes.al_video_image}>
              <img
                src={require("./Laptop.png")}
                alt="Laptop with winbox logo"
                className={classes.img}
              />
              <a
                className={classes.videoPlayBtn}
                href="https://www.youtube.com/watch?v=N6Zg8Q-jKNI"
              >
                <img
                  src={require("./playbtn.png")}
                  alt="Laptop with winbox logo"
                  className={classes.play}
                />
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
