import React from "react";
import "./styles.css";

const Button = (props) => {
  return <button className={props.className}>{props.label}</button>;
};
export default Button;
