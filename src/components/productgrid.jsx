import { Col, Container, Row, Button } from "react-bootstrap";
import ProductCard from "./product";
import PropTypes from "prop-types";

function ProductGrid({
  products,
  handleAddCartClick,
  handleLoadMoreClick,
  stepDown,
  stepUp,
}) {
  return (
    <>
      <Container>
        <Row lg={3} md={2} sm={1}>
          {products.map((card, index) => (
            <Col key={index} className="justify-content-center">
              <ProductCard
                key={card.id}
                imgSource={card.image}
                productTitle={card.title}
                productDescription={card.description}
                productType={card.type}
                price={card.price}
                id={card.id}
                addCart={handleAddCartClick}
                quantity={!card.quantity ? 0 : card.quantity}
                stepDown={stepDown}
                stepUp={stepUp}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-flex justify-content-center mb-3">
        <Button variant="secondary" type="button" onClick={handleLoadMoreClick}>
          Load More...
        </Button>
      </Container>
    </>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  cartArray: PropTypes.array,
  cartCount: PropTypes.func,
  handleAddCartClick: PropTypes.func,
  handleLoadMoreClick: PropTypes.func,
  stepDown: PropTypes.func,
  stepUp: PropTypes.func,
  quantity: PropTypes.number,
};

export default ProductGrid;
