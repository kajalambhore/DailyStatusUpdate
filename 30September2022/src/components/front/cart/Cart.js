import React from "react";
import "./Cart.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <>
      <Card className="cart_items text-center d-flex align-items-center mx-auto bg-warning">
        <Card.Header className="text-dark font-weight-bolder h2">
          Cart Items
        </Card.Header>

        {cartItems.length >= 1 && (
          <Button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </Button>
        )}
        <Card.Title></Card.Title>
        <Card.Body className="cart_body w-75">
          {cartItems.length === 0 && (
            <Card.Title className="cart-items-empty">
              No Items are added
            </Card.Title>
          )}

          <Card.Text>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-items-list">
                <img
                  className="cart-items-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-items-name">{item.name}</div>
                <div className="cart-items-function">
                  <Button
                    className="cart-items-add w-25"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </Button>
                  <Button
                    className="cart-items-remove w-25"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </Button>
                </div>
                <div className="cart-items-price">
                  {item.quantity} * ${item.price}
                </div>
              </div>
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-dark font-weight-bolder h4 w-100 cart-items-total-price ">
          Total Price:<div className="">${totalPrice}</div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Cart;
