import { Container, Row } from "react-bootstrap";
import CartItem from "./cartitem";
import PropTypes from "prop-types";

function ShoppingCart({ cartItems }) {
  return (
    <Container>
      <Row lg={1}>
        {cartItems.map((card) => (
          <CartItem
            key={card.id}
            imgSource={card.image}
            productTitle={card.title}
            price={card.price}
          />
        ))}
      </Row>
    </Container>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.array,
  quantity: PropTypes.number,
};

export default ShoppingCart;
