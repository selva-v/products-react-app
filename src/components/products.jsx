import React, { Component } from "react";
import Product from "./product";
import "../styles/product.css";

class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Product Name 1",
        imageUrl: "https://picsum.photos/310/200?random",
        isToggleOn: false,
        intro:
          "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 2,
        name: "Product Name 2",
        imageUrl: "https://picsum.photos/310/201?random",
        isToggleOn: false,
        intro:
          "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        name: "Product Name 3",
        imageUrl: "https://picsum.photos/310/202?random",
        isToggleOn: false,
        intro:
          "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 4,
        name: "Product Name 4",
        imageUrl: "https://picsum.photos/310/203?random",
        isToggleOn: false,
        intro:
          "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  };
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Select the products</h1>
        <div className="product-list">
          {this.state.products.map(product => (
            <Product
              key={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              isToggleOn={product.isToggleOn}
              intro={product.intro}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
