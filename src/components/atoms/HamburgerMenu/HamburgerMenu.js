const HamburgerMenu = (props) => {
  const fillColor = { fill: `${props.color}` };
  return (
    <svg
      viewBox="0 0 100 80"
      width={props.width}
      height={props.height}
      className={props.style}
    >
      <rect width="100" height="20" rx="8" style={fillColor}></rect>
      <rect y="30" width="100" height="20" rx="8" style={fillColor}></rect>
      <rect y="60" width="100" height="20" rx="8" style={fillColor}></rect>
    </svg>
  );
};

export default HamburgerMenu;
