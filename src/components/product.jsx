import React, { Component } from "react";
import "../styles/product.css";

class Products extends Component {
  state = {
    name: this.props.name,
    imageUrl: this.props.imageUrl,
    intro: this.props.intro
  };
  render() {
    return (
      <div className="product">
        <img src={this.state.imageUrl} alt="" />
        <div className="product-name clearfix">
          <h4 className="float-left">{this.state.name}</h4>
          <button className="float-left btn btn-outline-white">Select</button>
        </div>
        <div className="product-intro">{this.state.intro}</div>
      </div>
    );
  }
}

export default Products;
