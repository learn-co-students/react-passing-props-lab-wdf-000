const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');


const FruitBasket = (props) =>{

  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
      <FilteredFruitList filter={props.currentFilter} fruit={props.fruit}/>
    </div>
  )
}

//the fruitBasket component is a dumb component with no state at all. it inherates props from the parent and the props change when the parents state change causing the component to rerender. We render a filter compoennt which takes in a handleChange prop which is set the the callback function prop of the fruitbasket component. filters is set the filters array
//the component filtered fruit list takes in a prop of filter whcih takes in a prop of the current filter and the fruits

FruitBasket.defaultProps = {
  fruit: [],
  filters: null,
  currentFilter: null,
  updateFilterCallback: function() {}
}

module.exports = FruitBasket;
