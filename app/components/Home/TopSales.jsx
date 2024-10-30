import React from "react";
import ProductGrid from "../product/ProductGrid";

const TopSales = () => {
  return (
    <ProductGrid
      className="text-bgsecondary font-semibold"
      leftText="This month"
      rightText="view ALL"
    >
      <h3 className="font-inter font-semibold text-2xl sm:text-3xl">
        Best Selling Products
      </h3>
    </ProductGrid>
  );
};

export default TopSales;
