import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./product";
import PropTypes from "prop-types";

function ProductGrid({ products }) {
  console.log(products);
  return (
    <Container>
      <Row>
        {products.map((card, index) => (
          <Col key={index}>
            <ProductCard
              key={card.id}
              imgSource={card.image}
              productTitle={card.title}
              productDescription={card.description}
              productType={card.type}
              price={card.price}
              id={card.id}
              //onClick={handleCardClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array,
};

export default ProductGrid;
