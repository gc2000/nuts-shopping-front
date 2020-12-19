import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select value={this.props.size} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest"> Lowest</option>
            <option value="highest"> Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">All</option>
            <option value="Almonds">Almonds</option>
            <option value="Cashews">Cashews</option>
            <option value="Pecans">Pecans</option>
            <option value="Hazelnuts">Hazelnuts</option>
            <option value="Macadamia Nuts">Macadamia Nuts</option>
            <option value="Pistachios">Pistachios</option>
          </select>
        </div>
      </div>
    );
  }
}
