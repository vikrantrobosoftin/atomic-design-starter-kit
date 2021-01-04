const Text = (props) => {
  if (!props.text) return null;

  function createMarkup() {
    if (props.text) return { __html: props.text };
    else return { __html: "" };
  }
  return (
    <div
      className={props.style}
      dangerouslySetInnerHTML={createMarkup()}
      onClick={props.onClick}
      {...props}
    />
  );
};

export default Text;
