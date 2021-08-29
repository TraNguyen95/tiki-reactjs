import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import FilterByCatogory from "./Filters/FilterByCatogory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };
  const handlePriceChange = (values) => {
    if (onChange) onChange(values);
  };
  return (
    <Box>
      <FilterByCatogory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
      <FilterByService onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;