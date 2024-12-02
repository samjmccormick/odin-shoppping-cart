import { Container, Row, Button, Col } from "react-bootstrap";
import CartItem from "./cartitem";
import PropTypes from "prop-types";

function ShoppingCart({ cartItems, handleRemove }) {
  let counts = {};
  cartItems.forEach(function (item) {
    counts[item.id] = (counts[item.id] || 0) + 1;
  });

  let cart = [...new Set(cartItems)];

  let totalCost = 0;
  cartItems.map((item) => (totalCost = totalCost + Number(item.price)));

  return (
    <>
      <Container>
        <Row lg={1}>
          {cart.map((item, index) => (
            <>
              <CartItem
                key={item.id}
                imgSource={item.image}
                productTitle={item.title}
                price={item.price}
                quantity={item.quantity}
              />

              <Col xs="auto" className="mb-2">
                <Button
                  key={index}
                  type="button"
                  variant="danger"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove Item
                </Button>
              </Col>
            </>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <h1 className="total">Total: ${totalCost.toFixed(2)}</h1>
        </Row>
      </Container>
    </>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.array,
  quantity: PropTypes.number,
  handleRemove: PropTypes.func,
};

export default ShoppingCart;
