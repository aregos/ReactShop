import React, { Component } from 'react';
import './App.css';
import Shop from './Shop'
import Cart from './Cart'
import goods from "./goods"
import { Link , Route } from "react-router-dom";

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            goods : goods,
            quantities : Array(goods.length).fill(0),
            filter : ''
        }

    }

    onQuantityChange = (index,sign) => {
        const quantities = this.state.quantities.slice()
        switch (sign){
            case '+':
            quantities[index] = quantities[index] + 1
                this.setState({quantities : quantities})
                break
            case '-':
                quantities[index] = quantities[index] - 1
                this.setState({quantities : quantities})
                break
            default:
                return this.state
        }
    }

    onFilterChange = (text) => {
        this.setState({
            filter : text
        })
    }

     filterByName = () => {
        const { goods, filter } = this.state
        return goods.filter(item =>
                 (item.title.toLowerCase()).includes(filter.toLowerCase())
        )
    }

    deleteAllThisGood = index => {
        const quantities = this.state.quantities.slice()
        quantities[index] = 0
        this.setState({
            quantities : quantities
        })
    }

    clearCart = () => {
        const quantities = this.state.quantities.slice()
        for (let i = 0; i < quantities.length; i++) {
            quantities[i] = 0
        }
        this.setState({
            quantities : quantities
        })

    }

renderCart = () => {
        return (
            <div>
    <h1>Cart</h1>
    <Cart goods = {this.state.goods}
    quantities = {this.state.quantities}
    onQuantityChange = {this.onQuantityChange}
    deleteAllThisGood = {this.deleteAllThisGood}
    clearCart = {this.clearCart}
    />

            </div>
)
}

  render() {
    return (

     <div>
         <Route path="/" exact render={
             () => {
                 return (
                     <div>
         <h1>Shop</h1>
        <Shop goods = {this.filterByName()}
              quantities = {this.state.quantities}
              onQuantityChange = {this.onQuantityChange}
              onFilterChange = {this.onFilterChange}
        />
                         <button className="btn">
         <Link to="/cart">Корзина</Link>
                         </button>
                     </div>
             )
             }
         }/>
         <Route path='/cart' component={this.renderCart} />

     </div>

    )
  }
}

export default App;