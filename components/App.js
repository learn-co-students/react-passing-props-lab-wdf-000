const React = require('react');
const { Component } = require('react');

const FruitBasket = require('./FruitBasket');

class App extends Component {
  constructor() {
    super();
    this.state = {
      fruit: [],
      filters: [],
      selectedFilter: null
    }
    this.fetchFilters = this.fetchFilters.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange(e) {
    this.setState({ selectedFilter: e.target.value });
  }


  render() {
    return (
      <FruitBasket filters={this.state.filters} fruit={this.state.fruit} selectedFilter={this.state.selectedFilter} updateFilterCallback={this.handleFilterChange} />
    );
  }
}

module.exports = App;
