import React, { Component } from "react";
import GoodsList from "./GoodsList";


class Cart extends Component {
    render() {
        const goods = this.props.goods
        const quantities = this.props.quantities

        return (
            <div>
                <GoodsList goods = {goods}
                           quantities = {quantities}
                           onQuantityChange = {this.props.onQuantityChange}
                           shop_cart = {false}
                           deleteAllThisGood = {this.props.deleteAllThisGood}
                           clearCart = {this.props.clearCart}
                />
            </div>
        );
    }
}

export default Cart;
