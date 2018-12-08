import React, {Component} from "react";
import Good from "./Good";
import CartGood from "./CartGood"
import {Link} from "react-router-dom";


class GoodsList extends Component {

    constructor(props) {
        super(props)
        this.handleClearCart = this.handleClearCart.bind(this)
    }

    handleClearCart(){
        this.props.clearCart()
    }


    getFilterListForCart(){
        const quantities = this.props.quantities
        return this.props.goods.filter((item, index, arr) => quantities[index] > 0)
    }


    getTotalCartPrice() {
       const totalPrice = this.getFilterListForCart().reduce((sum, current) => sum + current.price * this.props.quantities[current.id],0)
        return totalPrice
    }


    
    ShopGoodsList() {
        const quantities = this.props.quantities
        const goodsList = this.props.goods.map(item =>
            <Good good={item}
                  key = {item.id}
                  id = {item.id}
                  onQuantityChange = {this.props.onQuantityChange}
                  quantity = {quantities[item.id]}
            />);
        return <div>
            <div className="row">
                <div className="col-md-1"><span className="font-weight-bold">Название</span></div>
                <div className="col-md-1"><span className="font-weight-bold">Цена</span></div>
                <div className="col-md-1"><span className="font-weight-bold">Количество</span></div>
            </div>
            {goodsList}

            </div>;
    }

    CartGoodsList() {
        const quantities = this.props.quantities
        const filterList = this.getFilterListForCart()
        const properShopGoodsList = filterList.map(item =>
                    <CartGood
                        good = {item}
                        key = {item.id}
                        id = {item.id}
                        onQuantityChange = {this.props.onQuantityChange}
                        quantity = {quantities[item.id]}
                        deleteAllThisGood = {this.props.deleteAllThisGood}
                    />)

        return (
           <div>
               <div className="row">
                   <div className="col-md-1"><span className="font-weight-bold">Название</span></div>
                   <div className="col-md-1"><span className="font-weight-bold">Стоимость</span></div>
                   <div className="col-md-1"><span className="font-weight-bold">Количество</span></div>
               </div>
                {properShopGoodsList.length === 0 ? <div>Корзина пуста</div> : properShopGoodsList}
                <div className="row low-bar">
                    <div className="col-md-3">
                        Total price: ${this.getTotalCartPrice()}
                    </div>
                </div>
               <div className="row">
                    <div className="col-md-3">
                        <button>
                            <Link to="/">
                                <span>Перейти в список товаров</span>
                            </Link>
                        </button>
                    </div>
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick={this.handleClearCart}>Очистить корзину</button>
                </div>

                </div>
           </div>
        )
    }

    render(){
     return (
         this.props.shop_cart === true ? this.ShopGoodsList() : this.CartGoodsList()
     )
    }

}

export default GoodsList