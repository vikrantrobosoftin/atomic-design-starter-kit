import NavBar from "../../organisms/NavBar";
import CardCarousel from "../../organisms/CardCarousel";
import CategoryList from "../../organisms/CategoryList";
import ContentList from "../../organisms/ContentList";
import "./styles.css";

const Home = (props) => {
  return (
    <div className={`home-container`}>
      <NavBar data={props.data.navBar} className={`home-navbar`} />
      <CardCarousel data={props.data.carousel} className={`home-carousel`} />
      <CategoryList
        data={props.data.category_list}
        classNameContainer={`home-category-list-container`}
        classNameCard={`home-category-list-card`}
      />
      <ContentList data={props.data.content_list} />
      <ContentList data={props.data.content_list} />
      <ContentList data={props.data.content_list} />
    </div>
  );
};

export default Home;
