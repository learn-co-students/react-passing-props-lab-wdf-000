const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = ({ fruit, filters, selectedFilter, updateFilterCallback}) => {
    return (
      <div className="fruit-basket">
        <Filter handleChange={updateFilterCallback} filters={filters} />
        <FilteredFruitList
          filter={selectedFilter} fruit={fruit} />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: function() {},
  updateFilterCallback: function() {}
};

module.exports = FruitBasket;
