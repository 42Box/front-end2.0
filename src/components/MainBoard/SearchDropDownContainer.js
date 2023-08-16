import "./SearchDropDownContainer.css";

const ListingOptions = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // 검색 로직을 추가해주세요.
    // 예: 검색 결과 표시, API 호출 등.
  };

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    // 드롭다운 선택 변경 시 동작을 추가해주세요.
    // 예: 선택된 옵션에 따른 처리 등.
  };

  return (
    <div className="search-dropdown-container">
      <input
        type="text"
        className="search-input"
        placeholder="검색어를 입력하세요"
        onChange={handleSearch}
      />
      <select className="dropdown" onChange={handleDropdownChange}>
        <option value="option1">최신순</option>
        <option value="option2">추천순</option>
        <option value="option3">인기글</option>
      </select>
    </div>
  );
};

export default ListingOptions;
