const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: []
    }
    this.fetchFilters = this.fetchFilters.bind(this);
  }
  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  render(){
    return(
      <FruitBasket fetchFilters={this.fetchFilters} />
    )
  }
}
module.exports = App;
