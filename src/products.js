async function getProducts({ quantity }) {
  const url = `https://fakestoreapi.com/products?limit=${quantity}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export default getProducts;
