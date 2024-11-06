import { Container, Row } from "react-bootstrap";
import CartItem from "./cartitem";
import PropTypes from "prop-types";

function ShoppingCart({ cartItems }) {
  const [quantity, setQuantity] = useState([]);
  for (let i = 0; i < cartItems.length; i++) {}

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
