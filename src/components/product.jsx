import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function ProductCard({
  imgSource,
  productTitle,
  productDescription,
  productType,
  price,
  onClick,
  id,
}) {
  function handleClick() {
    onClick(id);
  }

  return (
    <Card bg="dark" border="dark" text="white" onClick={handleClick}>
      <Card.Img variant="top" src={imgSource} />
      <Card.Body>
        <Card.Title>{productTitle}</Card.Title>
        <Card.Subtitle>{productType}</Card.Subtitle>
        <Card.Text>{productDescription}</Card.Text>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  imgSource: PropTypes.string,
  productDescription: PropTypes.string,
  productTitle: PropTypes.string,
  productType: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default ProductCard;
