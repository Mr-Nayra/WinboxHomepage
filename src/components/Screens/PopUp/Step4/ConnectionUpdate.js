import classes from "./ConnectionUpdate.module.css";
import Modal from "../../../UI/Modal/Modal";
import { Heading186 } from "../../../UI/Heading/Heading";
import success from "./success.gif";

const SucessMessage = () => {
  return (
    <Modal modalClass={classes.modal} backdropClass={classes.backdropClass}>
      <div className={classes.container}>
        <img src={success} className={classes.gif} />
        <Heading186 className={classes.heading}>
          Connection Successfull
        </Heading186>
      </div>
    </Modal>
  );
};

export const ErrorMessage = () => {
  return (
    <Modal modalClass={classes.modal} backdropClass={classes.backdropClass}>
      <div className={classes.container}>
        <img src={success} className={classes.gif} />
        <Heading186 className={classes.heading}>
          Oops!...Something went wrong
        </Heading186>
      </div>
    </Modal>
  );
};

export default SucessMessage;
