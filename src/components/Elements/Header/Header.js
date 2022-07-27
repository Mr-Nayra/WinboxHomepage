import classes from "./Header.module.css";
import Logo from "../../Icons/Logo";
import Button from "../../UI/Button/Button";
import BlueButton from "../../UI/BlueButton/Button";
import { Container } from "../../UI/Card/Card";
import { Link } from "react-router-dom";

const redirect = () => {
  window.location.href = "https://app.getwinbox.co/";
};

const Header = (props) => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.cont}>
          <Link to="/home">
            <Logo className={classes.logo} />
          </Link>
          <div class="dropdown">
            <button class="dropbtn" onclick="myFunction()">
              <p style={{ transform: "rotate(90deg)" }}>></p>
            </button>
            <div class="dropdown-content" id="myDropdown">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          {/* <div className={classes.flex}>
            <BlueButton
              onClick={props.onClick}
              value={props.value}
              className={classes.bluebutton}
            >
              Join Our Network
            </BlueButton>
            <Button onClick={redirect} className={classes.button}>
              Get Started
            </Button> 
          </div>*/}
        </div>
      </Container>
    </div>
  );
};

export default Header;
