const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
    this.fetchFruit = this.fetchFruit.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }

  fetchFilters(){
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  render(){
    return (
      <FruitBasket filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter} updateFilterCallback={this.handleFilterChange}/>
    );
  }
}

module.exports = App;
