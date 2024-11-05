let products = [];

async function getProducts(quantity) {
  const url = `https://fakestoreapi.com/products?limit=${quantity}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = response.json();
    products = json;
    return products;
  } catch (error) {
    console.error(error.message);
  }
}

export default getProducts;
