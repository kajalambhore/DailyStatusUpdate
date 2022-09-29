import React, { useState } from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Product = ({ productItems, handleAddProduct }) => {
  const [productData, setProductData] = useState(productItems);

  const filterResult = (cartItem) => {
    if (cartItem == "All") {
      setProductData(productItems);
    } else {
      const result = productItems.filter((curData) => {
        return curData.category === cartItem;
      });
      setProductData(result);

      console.log(result);
    }
  };

  return (
    <div className="container main_div">
      <ul className="nav justify-content-center mb-2">
        <li className="nav-item" onClick={() => filterResult("All")}>
          <a className="nav-link nav_link">All</a>
        </li>

        <li className="nav-item" onClick={() => filterResult("Headphone")}>
          <a className="nav-link nav_link">Headphone</a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link nav_link"
            onClick={() => filterResult("Mobile")}
          >
            Mobile
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link nav_link"
            onClick={() => filterResult("Laptop")}
          >
            Laptop
          </a>
        </li>
      </ul>

      <Row xs={1} md={3} className="g-4">
        {productData.map((productItem) => (
          <Col key={productItem.id}>
            <Card className="card text-center">
              <Card.Img
                variant="top"
                src={productItem.image}
                className="card_image w-100"
              />
              <Card.Body>
                <Card.Title>{productItem.name}</Card.Title>
                <Card.Text>Price: ${productItem.price}</Card.Text>
                <button
                  type="submit"
                  className="btn btn-dark w-75 addtocart_button"
                  onClick={() => handleAddProduct(productItem)}
                >
                  ADD TO CART
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
