import React, { Component } from "react";

class Good extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      const key = this.props.id
      this.props.onQuantityChange(key, '+')
  }

  render() {
    const { good } = this.props;
    const { quantity } = this.props
    return (
      <div className="row">
        <div className="col-md-1">{good.title}</div>
        <div className="col-md-1">${good.price}</div>
        <div className="col-md-1">{quantity}</div>
        <div className="col-md-1">
          <button className="btn" onClick={this.handleClick}>
            <span>+</span>
          </button>

        </div>
      </div>
    );
  }
}

export default Good;
