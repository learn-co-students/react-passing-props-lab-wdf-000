const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');


export default function FruitBasket({fruit, filters, currentFilter, updateFilterCallback, onUpdateFilter}){
     return (
        <div className="fruit-basket">
        </div>
      )
    }

FruitBasket.defaultProps = {
  currentFilter: "",
  updateFilterCallback: null,
  fruit: [],
  filters: null
};

// refactored before and after

// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//
//     this.handleFilterChange = this.handleFilterChange.bind(this);
//   }
//
//   handleFilterChange(e) {
//     console.log('new filter: ', e.target.value);
//     this.setState({ selectedFilter: e.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

module.exports = FruitBasket;
