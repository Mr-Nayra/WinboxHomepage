import { useState } from "react";
import classes from "./Tabs.module.css";

import Card from "../../../UI/Card/Card";
import BlueButton from "../../../UI/BlueButton/Button";
import Button from "../../../UI/Button/Button";

let name = "Add Multiple inbox";

const Tabs = () => {
  const [tab, setTab] = useState("1");
  const [show, setShow] = useState(false);

  const changeTab = (event) => {
    name = event.target.name;
    setTab(event.currentTarget.value);
  };

  const changeTabwDrop = (event) => {
    name = event.target.name;
    setTab(event.currentTarget.value);
    setShow((prev) => !prev);
  };

  const showDropdown = () => {
    setShow((prev) => !prev);
  };

  return (
    <Card className={classes.block}>
      <div class={classes.dropdown}>
        <button class={classes.dropbtn} onClick={showDropdown}>
          {name}
        </button>
        {show && (
          <div class={classes.dropdownContent}>
            <button
              value="1"
              name="Add Multiple inbox"
              onClick={changeTabwDrop}
            >
              Add Multiple inbox
            </button>
            <button value="2" name="Plug & play setup" onClick={changeTabwDrop}>
              Plug & play setup
            </button>
            <button
              value="3"
              name="Dashboard & monitoring"
              onClick={changeTabwDrop}
            >
              Dashboard & monitoring
            </button>
          </div>
        )}
      </div>
      <div className={classes.buttons}>
        {tab === "1" ? (
          <Button>Add Multiple inbox</Button>
        ) : (
          <BlueButton name="Add Multiple inbox" value="1" onClick={changeTab}>
            Add Multiple inbox
          </BlueButton>
        )}
        {tab === "2" ? (
          <Button>Plug & play setup</Button>
        ) : (
          <BlueButton value="2" name="Plug & play setup" onClick={changeTab}>
            Plug & play setup
          </BlueButton>
        )}
        {tab === "3" ? (
          <Button>Dashboard & monitoring</Button>
        ) : (
          <BlueButton
            value="3"
            name="Dashboard & monitoring"
            onClick={changeTab}
          >
            Dashboard & monitoring
          </BlueButton>
        )}
      </div>
      <div>
        {tab === "1" && (
          <img
            src={require("./Icons/1.webp")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        )}
        {tab === "2" && (
          <img
            src={require("./Icons/2.webp")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        )}
        {tab === "3" && (
          <img
            src={require("./Icons/3.webp")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        )}
      </div>
    </Card>
  );
};

export default Tabs;
