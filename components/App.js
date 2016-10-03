const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      selectedFilter: null,
      items: []
    };
 
    
    this.fetchFilters = this.fetchFilters.bind(this);
  }


  componentWillMount() {
    this.fetchFilters();
     fetch('/api/fruit')
       .then(res => res.json())
       .then(fruit => this.setState({ items: fruit}));
         
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  render() {
    return (
      <FruitBasket selectedFilter={this.state.selectedFilter} filters={this.state.filters} items={this.state.items}/>
    );
  }

}

module.exports = App;
