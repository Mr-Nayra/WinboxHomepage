import classes from "./Header.module.css";
import Logo from "../../Icons/Logo";
import Button from "../../UI/Button/Button";
import BlueButton from "../../UI/BlueButton/Button";
import { Container } from "../../UI/Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

const redirect = () => {
  window.location.href = "https://app.getwinbox.co/";
};

const Header = (props) => {
  const [show, setShow] = useState(false);

  const openBox = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.cont}>
          <Link to="/home">
            <Logo className={classes.logo} />
          </Link>
          <div class="dropdown">
            <button className={classes.dropButton} onClick={openBox}>
              <p
                style={{ transform: show ? "rotate(-90deg)" : "rotate(90deg)" }}
              >
                &gt;
              </p>
            </button>
            {show && (
              <div className={classes.dropdownContent}>
                <button onClick={props.onClick} value={props.value}>
                  Join Our Network
                </button>
                <button onClick={redirect}>Get Started</button>
              </div>
            )}
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
