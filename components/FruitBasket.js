const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = ({fruit, filters, currentFilter, updateFilterCallback}) => (
  <div className="fruit-basket">
    <Filter handleChange={updateFilterCallback} />
    <FilteredFruitList
      filter={currentFilter} />
  </div>
)


FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: '',
  updateFilterCallback: function() {}
}


module.exports = FruitBasket;
