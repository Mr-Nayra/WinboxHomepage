import classes from "./Input.module.css";

const Link = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.parah}>{props.children}</p>
        {props.required && <p className={classes.asterik}>*</p>}
      </div>
      <input
        className={`${props.className}  ${classes.input} `}
        placeholder={props.children}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Link;
