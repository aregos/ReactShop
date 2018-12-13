import React from 'react'

export default class Filter extends React.Component{

    constructor(props){
        super(props)
    }

    handleChange = e => {
        this.props.onFilterChange(e.target.value)
    }

render() {
    return (
        <div className="row">
            <div className="col-md-12">
                <input  className="form-control input-group-sm mb-3"
                        type="text"
                       value = {this.props.filter}
                       placeholder="введите часть названия товара"
                       onChange={this.handleChange}/>
            </div>
        </div>
    )
}
}
