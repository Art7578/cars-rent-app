import React, { useState } from "react";
import PropTypes from "prop-types";
import { SearchContainer, SearchInput, SearchButton, ResetButton } from "./CarSearch.styled";

const CarSearch = ({ onSearch, onReset }) => {
  const [searchData, setSearchData] = useState({
    brand: "",
    priceFrom: "",
    priceTo: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSearch = () => {
    const formattedData = {
      ...searchData,
      priceFrom: searchData.priceFrom ? `$${searchData.priceFrom}` : "",
      priceTo: searchData.priceTo ? `$${searchData.priceTo}` : "",
    };
    onSearch(formattedData);
  };

  const handleReset = () => {
    setSearchData({
      brand: "",
      priceFrom: "",
      priceTo: "",
      mileageFrom: "",
      mileageTo: "",
    });
    onReset();
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        name="brand"
        placeholder="Car brand"
        value={searchData.brand}
        onChange={handleChange}
      />
      <SearchInput
        type="number"
        name="priceFrom"
        placeholder="Price from"
        value={searchData.priceFrom}
        onChange={handleChange}
      />
      <SearchInput
        type="number"
        name="priceTo"
        placeholder="Price to"
        value={searchData.priceTo}
        onChange={handleChange}
      />
      <SearchInput
        type="number"
        name="mileageFrom"
        placeholder="Mileage from"
        value={searchData.mileageFrom}
        onChange={handleChange}
      />
      <SearchInput
        type="number"
        name="mileageTo"
        placeholder="Mileage to"
        value={searchData.mileageTo}
        onChange={handleChange}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </SearchContainer>
  );
};

CarSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default CarSearch;