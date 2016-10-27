const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

function FruitBasket(props) {
  return (
    <div className="fruit-basket">
      <Filter
        filters={props.filters}
        handleChange={props.onUpdateFilterCallback} />
      <FilteredFruitList
        fruit={props.fruit}
        filter={props.currentFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  defaultProp: null,
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
}

module.exports = FruitBasket;
