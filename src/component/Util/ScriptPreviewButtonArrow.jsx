const ScriptPreviewButtonArrow = ({ isClicked }) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${isClicked ? -180 : 0}deg)`,
        cursor: "pointer",
        transition: "transform 300ms ease-out",
      }}
    >
      <g id="&#236;&#157;&#180;&#236;&#160;&#132; bt">
        <path
          id="Vector 1"
          d="M4 7.5L9 12.5L14 7.5"
          stroke={"#8E8E8E"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ScriptPreviewButtonArrow;
