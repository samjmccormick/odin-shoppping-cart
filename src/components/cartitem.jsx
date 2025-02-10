import {
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import PropTypes from "prop-types";

function CartItem({
  imgSource,
  productTitle,
  price,
  quantity,
  stepDown,
  stepUp,
  id,
}) {
  function handleStepUp() {
    stepUp(id);
  }

  function handleStepDown() {
    stepDown(id);
  }
  return (
    <Row className="cart-item " data-bs-theme="dark">
      <Col className="cart-image" md="auto">
        <Image
          src={imgSource}
          style={{ height: "18rem", width: "18rem", borderRadius: "10px" }}
        />
      </Col>
      <Col>
        <h1>{productTitle}</h1>
        <div>Price: ${price}</div>
      </Col>
      <Col xs="auto">
        <InputGroup id="cart-quantity">
          <Button
            variant="outline-secondary"
            id="button-addon1"
            type="button"
            onClick={handleStepUp}
          >
            +
          </Button>
          <FormControl
            type="number"
            value={quantity}
            className="quantity"
            readOnly
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="button"
            onClick={handleStepDown}
          >
            -
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
}

CartItem.propTypes = {
  imgSource: PropTypes.string,
  productTitle: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.number,
  stepUp: PropTypes.func,
  stepDown: PropTypes.func,
};

export default CartItem;
