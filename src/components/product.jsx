import React, { Component } from "react";
import "../styles/product.scss";

class Products extends Component {
  state = {
    name: this.props.name,
    imageUrl: this.props.imageUrl,
    intro: this.props.intro,
    isToggleOn: this.props.isToggleOn
  };
  render() {
    return (
      <div className="product">
        <img src={this.state.imageUrl} alt="" />
        <div className="product-name clearfix">
          <h4 className="float-left">{this.state.name}</h4>
          <button
            className={this.getButtonClasses()}
            onClick={this.handleClick}
          >
            {this.renderButtonText()}
          </button>
        </div>
        <div className="product-intro">{this.state.intro}</div>
      </div>
    );
  }

  handleClick = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  };

  renderButtonText() {
    if (this.state.isToggleOn) return "Selected";
    return "Select";
  }

  getButtonClasses() {
    let classes = "float-left btn ";
    classes += this.state.isToggleOn ? "btn-fill-white" : "btn-outline-white";
    return classes;
  }
}

export default Products;
