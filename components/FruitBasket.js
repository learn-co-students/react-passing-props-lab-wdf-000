const React = require('react');
const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

function FruitBasket(props) {
    return (
      <div className="fruit-basket">
        <Filter filters={props.filters} handleChange={props.updateFilterCallback} />
        <FilteredFruitList
          filter={props.currentFilter} fruit={props.fruit}/>
      </div>
    );
}
FruitBasket.defaultProps = {
  filters: [], fruit: [], currentFilter: null, updateFilterCallback: null
}

module.exports = FruitBasket;
