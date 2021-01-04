import classNames from "classnames";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import SearchIcon from "../../atoms/SearchIcon";
import Button from "../../atoms/Button";
import "./styles.css";

const NavBar = (props) => {
  const style = classNames(`navbar-container`, props.className);
  return (
    <div className={style}>
      <HamburgerMenu height={30} width={30} color={"white"} />
      <div className={`navbar-logo-container`}>
        <Image src={props.data.logo} width={30} height={30} />
        <Text text={"discovery+"} className={`navbar-logo-text`} />
      </div>
      <div className={`navbar-text-container`}>
        {props.data.navData.map((item, index) => {
          return <Text text={item} className={`navbar-text`} />;
        })}
      </div>
      <div className={`navbar-search-signin-button-container`}>
        <SearchIcon
          height={30}
          width={30}
          color={"white"}
          className={`navbar-search-icon`}
        />
        <Button
          label={props.data.buttonText}
          className={`navbar-signin-button`}
        />
      </div>
    </div>
  );
};

export default NavBar;
