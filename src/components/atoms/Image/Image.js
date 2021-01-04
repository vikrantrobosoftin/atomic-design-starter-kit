const Image = (props) => {
  return (
    <img
      alt={props.altText}
      src={props.src}
      className={props.className}
      {...props}
    />
  );
};

export default Image;
