import React, { useState } from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

const Product = ({ productItems, handleAddProduct }) => {
  const [productData, setProductData] = useState(productItems);
  const [search, setSearch] = useState("");
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

  const handleSearch = () => {
    const searchItem = productItems.filter((item) => {
      return item.name.includes(search);
    });
    setProductData(searchItem);
    console.log(searchItem);
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
        <Form className="d-flex h-25 m-3 search">
          <Form.Control
            type="search"
            placeholder="Search"
            className="serach me-2"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button variant="outline-success" onClick={handleSearch}>
            Search
          </Button>
        </Form>
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
              <Card.Body className="card_body">
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
