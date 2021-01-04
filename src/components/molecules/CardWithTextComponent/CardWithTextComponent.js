import React from "react";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import PlayIcon from "../../atoms/PlayIcon";
import "./styles.css";

const CardWithTextComponent = (props) => {
  return (
    <div className="cwtc-container">
      <div className="cwtc-text-container">
        <Text text={props.title} className={`cwtc-title`} />
        <Text text={props.subTitle} className={`cwtc-subTitle`} />
        <div className="cwtc-button-container">
          <Button label={props.label1} className={`cwtc-button-1`} />
          <Button label={props.label2} className={`cwtc-button-2`} />
        </div>
        <div className="cwtc-play-container">
          <PlayIcon
            height={30}
            width={30}
            color={"black"}
            className={`cwtc-play-icon`}
          />
          <Text text={"Play"} className={`cwtc-play-text`} />
        </div>
      </div>
      <Image src={props.src} className={`cwtc-image`} />
    </div>
  );
};

export default CardWithTextComponent;
