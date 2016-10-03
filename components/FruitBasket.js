const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = function(props) {
    console.log(props)
  return (
      <div className="fruit-basket">
        <Filter filters={props.filters} />
        <FilteredFruitList
          filter={props.selectedFilter} fruit={props.items}/>
      </div>
  );
}

FruitBasket.defaultProps = {
  fruit: "",
  filters: [],
  currentFilter: null,
  updateFilterCallback: null,
}

module.exports = FruitBasket;
