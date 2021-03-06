import classes from "./Carousel.module.css";
import { Heading447 } from "../../../UI/Heading/Heading";
import Card from "../../../UI/Card/Card";
import Owl from "./Owl";
import { Container } from "../../../UI/Card/Card";

const Carousel = (props) => {
  return (
    <div className={classes.container}>
      <Container style={{ flexDirection: "column" }}>
        <Card className={classes.cont}>
          <Heading447 className={classes.headingTop}>
            Warm-up your inbox from any
          </Heading447>
          <Heading447 className={classes.heading}>
            email service provider.
          </Heading447>
        </Card>
        <div>
          <Owl />
        </div>
      </Container>
    </div>
  );
};

export default Carousel;
