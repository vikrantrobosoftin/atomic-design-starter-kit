import Text from "../../atoms/Text";
import CategoryList from "../CategoryList";
import "./styles.css";

const ContentList = (props) => {
  return (
    <div className="content-list-container">
      <div className="content-list-text-container">
        <Text text={props.data.title} className={`content-list-heading`} />
        <Text
          text={props.data.actionText}
          className={`content-list-action-text`}
        />
      </div>
      <CategoryList
        data={props.data.data}
        classNameContainer={`content-list-item-container`}
        classNameCard={`content-list-item-card`}
      />
    </div>
  );
};

export default ContentList;
