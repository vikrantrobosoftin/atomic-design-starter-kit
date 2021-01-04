import React from "react";
import classNames from "classnames";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import "./styles.css";

const CardComponent = (props) => {
  console.log("cc", props);

  const style = classNames(`cc-container`, props.className);
  return (
    <div className={style}>
      <Image src={props.src} className={`cc-image`} />
      {props.text && <Text text={props.text} className={`cc-text`} />}
    </div>
  );
};

export default CardComponent;
