import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./product";
import PropTypes from "prop-types";

function ProductGrid({ products, handleAddCartClick }) {
  return (
    <Container>
      <Row lg={3} md={2} sm={1}>
        {products.map((card, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <ProductCard
              key={card.id}
              imgSource={card.image}
              productTitle={card.title}
              productDescription={card.description}
              productType={card.type}
              price={card.price}
              id={card.id}
              onClick={handleAddCartClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  cartArray: PropTypes.array,
  cartCount: PropTypes.func,
  handleAddCartClick: PropTypes.func,
};

export default ProductGrid;
