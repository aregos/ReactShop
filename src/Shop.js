import React, { Component } from "react";
import GoodsList from "./GoodsList";


class Shop extends Component {
  render() {
      const goods = this.props.goods
      const quantities = this.props.quantities

    return (
      <div>
        <GoodsList goods = {goods}
                   quantities = {quantities}
                   onQuantityChange = {this.props.onQuantityChange}
                   onFilterChange = {this.props.onFilterChange}
                   shop_cart = {true} />
      </div>
    );
  }
}

export default Shop;
