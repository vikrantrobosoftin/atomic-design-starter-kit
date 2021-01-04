import classNames from "classnames";
import CardComponent from "../../molecules/CardComponent";
import "./styles.css";

const CategoryList = (props) => {
  const listStyle = classNames(
    `category-list-container`,
    props.classNameContainer
  );
  return (
    <div className={listStyle}>
      {props.data.map((item, index) => {
        return (
          <CardComponent
            src={item.src}
            text={item.text}
            className={props.classNameCard}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
