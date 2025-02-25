import {
  Card,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import PropTypes from "prop-types";

function ProductCard({
  imgSource,
  productTitle,
  productDescription,
  productType,
  price,
  addCart,
  id,
}) {
  function handleClick() {
    addCart(id);
  }

  return (
    <Card bg="dark" border="dark" text="white" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSource} style={{ height: "18rem" }} />
      <Card.Body>
        <Card.Title>{productTitle}</Card.Title>
        <Card.Subtitle>{productType}</Card.Subtitle>
        <Accordion data-bs-theme="dark">
          <AccordionHeader>Product Description</AccordionHeader>
          <AccordionBody>{productDescription}</AccordionBody>
        </Accordion>
        <Card.Text>
          <b>Price:</b> ${price}
        </Card.Text>
        <Row>
          <Col>
            <Button variant="secondary" type="button" onClick={handleClick}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  imgSource: PropTypes.string,
  productDescription: PropTypes.string,
  productTitle: PropTypes.string,
  productType: PropTypes.string,
  addCart: PropTypes.func,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default ProductCard;
