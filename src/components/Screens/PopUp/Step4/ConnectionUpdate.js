import classes from "./ConnectionUpdate.module.css";
import Modal from "../../../UI/Modal/Modal";
import { Heading186 } from "../../../UI/Heading/Heading";
import success from "./success.gif";
import error from "./error.gif";

const Message = (props) => {
  return (
    <Modal modalClass={classes.modal} backdropClass={classes.backdropClass}>
      <div className={classes.container}>
        <img src={props.error ? error : success} className={classes.gif} />
        <Heading186 className={classes.heading}>{props.parah}</Heading186>
      </div>
    </Modal>
  );
};

export default Message;
