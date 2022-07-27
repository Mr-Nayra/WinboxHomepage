import { useState } from "react";
import classes from "./Tabs.module.css";

import Card from "../../../UI/Card/Card";
import BlueButton from "../../../UI/BlueButton/Button";
import Button from "../../../UI/Button/Button";

const Tabs = () => {
  const [tab, setTab] = useState("1");

  const changeTab = (event) => {
    setTab(event.currentTarget.value);
  };

  return (
    <Card className={classes.block}>
      <div class={classes.dropdown}>
        <button class={classes.dropbtn}>Dropdown</button>
        <div class={classes.dropdownContent}>
          <button value="1" onClick={changeTab}>Add Multiple inbox</button>
          <button value="2" onClick={changeTab}>Plug & play setup</button>
          <button value="3" onClick={changeTab}>Dashboard & monitoring</button>
        </div>
      </div>
      <div className={classes.buttons}>
        {tab === "1" ? (
          <Button>Add Multiple inbox</Button>
        ) : (
          <BlueButton value="1" onClick={changeTab}>
            Add Multiple inbox
          </BlueButton>
        )}
        {tab === "2" ? (
          <Button>Plug & play setup</Button>
        ) : (
          <BlueButton value="2" onClick={changeTab}>
            Plug & play setup
          </BlueButton>
        )}
        {tab === "3" ? (
          <Button>Dashboard & monitoring</Button>
        ) : (
          <BlueButton value="3" onClick={changeTab}>
            Dashboard & monitoring
          </BlueButton>
        )}
      </div>
      <div>
        {tab === "1" && (
          <img
            src={require("./Icons/1.png")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        )}
        {tab === "2" && (
          <img
            src={require("./Icons/2.png")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        )}
        {tab === "3" && (
          <img
            src={require("./Icons/3.jpeg")}
            alt="Laptop with winbox logo"
            className={classes.img}
          />
        )}
      </div>
    </Card>
  );
};

export default Tabs;
