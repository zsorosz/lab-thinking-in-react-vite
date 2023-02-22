import React from "react";
import ProductRow from "./ProductRow";
function ProductTable({ products, searchTerm, isFiltered }) {
  let filteredProducts = products.filter((product) => product.inStock);
  isFiltered ? (products = [...filteredProducts]) : (products = [...products]);
  return (
    <div class="container">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ? (
              <ProductRow
                key={product.id}
                product={product}
                isFiltered={isFiltered}
              />
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
