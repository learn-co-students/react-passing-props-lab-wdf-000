const React = require('react');
const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

export default function FruitBasket({fruit, filters, currentFilter, updateFilterCallback, onUpdateFilter}){
  return (
          <div className="fruit-basket">
            <Filter filters={filters} handleChange={onUpdateFilter} />
            <FilteredFruitList fruit={fruit} filter={currentFilter} />
          </div>
      );
}

FruitBasket.defaultProps = {fruit: [], filters: [], updateFilterCallback: () => {}, currentFilter: null };

module.exports = FruitBasket;
