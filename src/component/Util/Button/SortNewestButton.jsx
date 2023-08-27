import SortButton from "./SortButton";

const SortNewestButton = ({ onClick, isClicked }) => {
  return (
    <SortButton onClick={onClick} isClicked={isClicked}>
      최신순
    </SortButton>
  );
};

export default SortNewestButton;
