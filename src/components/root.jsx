import { useEffect, useState } from "react";
import ProductGrid from "./productgrid";
import { Button, Container } from "react-bootstrap";
import NavBar from "./navbar";
import ShoppingCart from "./shoppingcart";

function Root() {
  const [productsList, setProductsList] = useState([]);
  const [productNumber, setProductNumber] = useState(6);
  const [cart, setCart] = useState([]);

  function handleAddCartClick(id) {
    setCart((previousState) => [
      ...previousState,
      productsList.find((product) => product.id === id),
    ]);
  }

  console.log(cart);
  async function getProducts(quantity) {
    const url = `https://fakestoreapi.com/products?limit=${quantity}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setProductsList(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getProducts(productNumber);
  }, [productNumber]);

  function handleLoadMoreClick() {
    setProductNumber((previous) => previous + 3);
  }

  return (
    <>
      <NavBar cartCount={cart.length} />

      <ProductGrid
        products={productsList}
        handleAddCartClick={handleAddCartClick}
      />
      <Container className="d-flex justify-content-center">
        <Button variant="secondary" type="button" onClick={handleLoadMoreClick}>
          Load More...
        </Button>
      </Container>

      {/* <ShoppingCart cartItems={cart} /> */}
    </>
  );
}

export default Root;
