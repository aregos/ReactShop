import React, { Component } from "react";

class Good extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleClick() {
        const key = this.props.id
        this.props.onQuantityChange(key, '-')
    }


    handleDeleteClick() {
        const key = this.props.id
        this.props.deleteAllThisGood(key)
    }

    getTotalPrice = () => {
        const { good } = this.props
        const { quantity } = this.props
        return good.price * quantity
    }

    render() {
        const { good } = this.props;
        const { quantity } = this.props
        return (
            <div className="good row">
                <div className="col-md-1">{good.title}</div>
                <div className="col-md-1">${this.getTotalPrice()}</div>
                <div className="col-md-1">{quantity}</div>
                <div className="col-md-1">
                    <button className="btn" onClick={this.handleClick} disabled={quantity < 1 ? 'disabled' : ''} >
                        <span>-</span>
                    </button>
                </div>
                <div className = "col-md-1">
                    <button className="btn" onClick={this.handleDeleteClick}>
                        <span>Удалить все</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Good;
