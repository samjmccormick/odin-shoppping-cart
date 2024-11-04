import { useState } from "react";
import ProductGrid from "./productgrid";
import getProducts from "../products";
import { Button } from "react-bootstrap";

function Root() {
  const [productsList, setProductsList] = useState(getProducts(5));

  function handleLoadMoreClick() {
    setProductsList((previous) => getProducts(previous.length + 5));
  }

  return (
    <>
      <ProductGrid products={productsList} />
      <Button variant="secondary" type="button" onClick={handleLoadMoreClick}>
        Load More...
      </Button>
    </>
  );
}

export default Root;
