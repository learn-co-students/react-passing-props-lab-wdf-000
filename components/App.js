const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }

    this.updateFilter = this.updateFilter.bind(this)

  }
  componentWillMount() {
    this.updateFilter();
    this.fetchFruit();
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({fruit: fruit}));
  }

  updateFilter() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  render(){
    return (
      <FruitBasket 
        fruit={this.state.fruit} 
        filters={this.state.filters} 
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter}  
      />
    );
  } 
}

module.exports = App;
