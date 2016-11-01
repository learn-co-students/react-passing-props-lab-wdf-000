const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

function FruitBasket(props) {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} /> //
      <FilteredFruitList
        filter={props.selectedFilter} /> //
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: '',
  updateFilterCallback: function() {} 
}

module.exports = FruitBasket;

// handleFilterChange(e) {
//     console.log('new filter: ', e.target.value);
//     this.setState({ selectedFilter: e.target.value });
//   }