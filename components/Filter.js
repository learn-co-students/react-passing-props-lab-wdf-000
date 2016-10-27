const React = require('react');
// const { Component } = require('react');

const Filter = ({filters,handleChange}) => {
  return (
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
};

Filter.defaultProps = {
  filters:null,
  handleChange:null,
};
// class Filter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: []
//     };

//     this.fetchFilters = this.fetchFilters.bind(this);
//   }

//   componentWillMount() {
//     this.fetchFilters();
//   }

//   fetchFilters() {
//     fetch('/api/fruit_types')
//       .then(res => res.json())
//       .then(filters => this.setState({filters: filters}));
//   }

//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.state.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }

module.exports = Filter;
