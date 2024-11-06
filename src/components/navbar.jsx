import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

function NavBar({ cartCount, shopClick, cartClick }) {
  return (
    <Navbar
      data-bs-theme="dark"
      className="justify-content-center"
      sticky="top"
    >
      <Nav variant="underline" fill>
        <Nav.Item>
          <Nav.Link onClick={shopClick}>Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={cartClick}>
            Cart<div className="cart-count">{cartCount}</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

NavBar.propTypes = {
  cartCount: PropTypes.number,
  shopClick: PropTypes.func,
  cartClick: PropTypes.func,
};

export default NavBar;
