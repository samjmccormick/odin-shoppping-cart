import { Container, Row, Button, Col } from "react-bootstrap";
import CartItem from "./cartitem";
import PropTypes from "prop-types";

function ShoppingCart({ cartItems, handleRemove }) {
  let totalCost = 0;
  cartItems.map((item) => (totalCost = totalCost + Number(item.price)));

  return (
    <>
      <Container>
        <Row lg={1}>
          {cartItems.map((item, index) => (
            <>
              <CartItem
                key={item.id}
                imgSource={item.image}
                productTitle={item.title}
                price={item.price}
                quantity={item.quantity}
              />

              <Col xs="auto" className="mb-2" key={index}>
                <Button
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
