import classNames from "classnames";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardWithTextComponent from "../../molecules/CardWithTextComponent";
import "./styles.css";

const CardCarousel = (props) => {
  const style = classNames(`carousel-container`, props.className);
  return (
    <Carousel axis="horizontal" className={style} autoPlay={true}>
      {props.data.map((item, index) => {
        return (
          <CardWithTextComponent
            key={index.toString()}
            src={item.src}
            title={item.title}
            subTitle={item.subTitle}
            label1={item.label1}
            label2={item.label2}
          />
        );
      })}
    </Carousel>
  );
};

export default CardCarousel;
