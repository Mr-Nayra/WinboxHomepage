import classes from "./Header.module.css";
import Logo from "../../../Icons/Logo";
import Button from "../../../UI/Button/Button";
import BlueButton from "../../../UI/BlueButton/Button";
import { Container } from "../../../UI/Card/Card";

const redirect = () => {
  window.location.href = "https://app.getwinbox.co/";
};

const Header = (props) => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.cont}>
          <Logo className={classes.logo} />
          <div className={classes.flex}>
            <BlueButton onClick={props.onClick} value={props.value}>
              Connect Your Inbox
            </BlueButton>
            <Button onClick={redirect} className={classes.button}>
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
