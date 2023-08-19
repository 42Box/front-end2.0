import "./RefreshButton.css";
import { MdOutlineRefresh } from "react-icons/md";

const RefreshButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="refresh-button" onClick={handleRefresh}>
      <MdOutlineRefresh>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10h-2c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 6 2.79 6 7h-2z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </MdOutlineRefresh>
    </div>
  );
};

export default RefreshButton;
