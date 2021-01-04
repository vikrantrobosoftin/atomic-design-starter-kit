const PlayIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 72 72"
      className={props.className}
    >
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <ellipse
          cx="34.889"
          cy="34.833"
          fill="#1B1B1B"
          fillOpacity="0.8"
          fillRule="nonzero"
          stroke="#FFF"
          rx="34.889"
          ry="34.833"
        ></ellipse>
        <path
          fill="#FFF"
          d="M46.364 34.23c.47.358.705.816.705 1.373 0 .558-.235 1.016-.705 1.374L28.539 46.89c-.256.12-.491.179-.705.179-.342 0-.641-.12-.898-.358-.256-.24-.384-.518-.384-.836V25.332c0-.318.128-.597.384-.836.257-.239.556-.358.898-.358.257 0 .492.06.705.18l17.825 9.912z"
        ></path>
      </g>
    </svg>
  );
};

export default PlayIcon;
