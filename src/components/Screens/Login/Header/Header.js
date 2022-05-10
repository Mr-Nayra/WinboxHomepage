import classes from "./Header.module.css";
import Logo from "../../../Icons/Logo";
import Button from "../../../UI/Button/Button";
import BlueButton from "../../../UI/BlueButton/Button";
import { Container } from "../../../UI/Card/Card";

const redirect = () => {
  window.location.href = "https://app.getwinbox.co/login";
}

const Header = (props) => {
  return (
      <div className={classes.container}>
      <Container>
        <Logo className={classes.logo} />
        <div className={classes.flex}>
          <BlueButton href="#">
            Connect Your Inbox
          </BlueButton>
          <Button onClick={redirect} className={classes.button}>
            Get Started
          </Button>
        </div>
        </Container>
      </div>

  );
};

export default Header;
