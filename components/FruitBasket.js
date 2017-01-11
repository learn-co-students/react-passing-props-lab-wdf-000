const React = require('react')
const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props) => {

    return (
      <div className="fruit-basket">
        <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
        <FilteredFruitList
          filter={props.currentFilter} />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: null,
  currentFilter: null,
  updateFilterCallback: function(){}
}

module.exports = FruitBasket;
