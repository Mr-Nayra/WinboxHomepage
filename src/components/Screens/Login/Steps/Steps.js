import classes from "./Steps.module.css";
import Row, { Row2 } from "./Row";
import Button from "../../../UI/Button/Button";
import { Container } from "../../../UI/Card/Card";

const Steps = (props) => {
  return (
    <div className={classes.container}>
      <Container style={{ flexDirection: "column" }}>
        <Row
          stepnumber="1"
          heading="Connect your inbox in 2min & start your warm-up"
          parah="Connect your inbox from any email provider (Gmail - GSuite OAuth, Outlook 365, Yahoo Mail, Amazon SES, SMTP, etc.)"
          link="Start warming up your inbox now"
          href="https://app.getwinbox.co/login"
        >
          <img
            src={require("./Icons/1.webp")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        </Row>
        <Row2
          stepnumber="2"
          heading="We interact automatically, as humans, with your emails"
          parah="Winbox will send everyday realistic emails from your inbox (GPT-3)"
          link="Start warming up your inbox now"
          href="https://app.getwinbox.co/login"
        >
          <img
            src={require("./Icons/2.webp")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        </Row2>
        <Row
          stepnumber="3"
          heading="+10,000 inboxes ready to raise your email reputation"
          parah="Get benefit of a +10,000 private inboxes network composed of a mix of the most important email service providers."
          link="Start warming up your inbox now"
          href="https://app.getwinbox.co/login"
        >
          <img
            src={require("./Icons/3.webp")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        </Row>
        <Row2
          stepnumber="4"
          heading="Monitor your new great deliverability results with detailed reports"
          parah="Get detailed analytics & monitor your inbox reputation. After few days, you will see first results appears: your cold emails will not land in spam anymore & reach your target inboxes!"
          link="Start warming up your inbox now"
          href="https://app.getwinbox.co/login"
        >
          <img
            src={require("./Icons/4.webp")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        </Row2>
      </Container>
    </div>
  );
};

export default Steps;
