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
    this.fetchFilters = this.fetchFilters.bind(this);
    this.fetchFruit = this.fetchFruit.bind(this)
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  handleChange(e){
    this.setState({
      currentFilter: e.target.value
    })
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit(){
    fetch('/api/fruit')
    .then(res => res.json())
    .then(fruit => this.setState({fruit: fruit}));
  }

  render(){
    return (
      <FruitBasket
        filters={this.state.filters}
        fruit={this.state.fruit}
        updateFilterCallback={this.handleChange.bind(this)}
        currentFilter={this.state.currentFilter}/>    );
  }
}

module.exports = App;
