import React, { useState } from "react";
import jsonData from "../data.json";
import ProductRow from "./ProductRow";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div class="container">
      <h1 class="mb-3">IronStore</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <label className="mb-5 mt-3">
        Only show products in stock
        <input
          type="checkbox"
          checked={isFiltered}
          onChange={(event) => setIsFiltered(event.target.checked)}
        />
      </label>

      <ProductTable
        products={products}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        isFiltered={isFiltered}
      />
    </div>
  );
}
export default ProductsPage;
