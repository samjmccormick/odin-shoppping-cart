import { useEffect, useState } from "react";
import ProductGrid from "./productgrid";
import NavBar from "./navbar";
import ShoppingCart from "./shoppingcart";

function Root() {
  const [productsList, setProductsList] = useState([]);
  const [productNumber, setProductNumber] = useState(6);
  const [cart, setCart] = useState([]);
  const [shopActive, setShopActive] = useState(true);

  function handleAddCartClick(id) {
    setCart((previousState) => [
      ...previousState,
      productsList.find((product) => product.id === id),
    ]);
  }

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

  function handleCartClick() {
    if (cart.length > 0) {
      setShopActive(false);
    } else {
      alert("Your cart is empty");
    }
  }

  function handleRemove(id) {
    console.log(id);
    let cartTemp = [...cart];
    cartTemp.splice(
      cartTemp.findIndex((item) => item.id === id),
      1
    );
    setCart(cartTemp);
    if (cartTemp.length === 0) {
      setShopActive(true);
    }
  }

  console.log(cart);

  return (
    <>
      <NavBar
        cartCount={cart.length}
        shopClick={() => setShopActive(true)}
        cartClick={handleCartClick}
      />

      {shopActive && (
        <ProductGrid
          products={productsList}
          handleAddCartClick={handleAddCartClick}
          handleLoadMoreClick={handleLoadMoreClick}
        />
      )}
      {!shopActive && (
        <ShoppingCart cartItems={cart} handleRemove={handleRemove} />
      )}
    </>
  );
}

export default Root;
