const FilterArrow = ({ isClicked, isSelected }) => {
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
          stroke={isSelected || isClicked ? "#FF9548" : "#8E8E8E"}
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default FilterArrow;
