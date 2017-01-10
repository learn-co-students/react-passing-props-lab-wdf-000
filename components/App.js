const React = require('react');

const FruitBasket = require('./FruitBasket');


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
    this.fetchFilters = this.fetchFilters.bind(this)
    this.fetchFruit = this.fetchFruit.bind(this)
  }

//our app componenet is the parent component and holds all the children component. it takes in a state of fruit an array, filters an array and currentFilter which is the acutal filter.

  componentWillMount() {
   this.fetchFilters();
   this.fetchFruit();
  }

  //before the compoent is render we want to fetch the filters. Fetch filters returns a api json object of the fruit types. All the fruit types. after we get the json object we set it to the state of filters. we use this in our filters component

   handleChange(e){
     this.setState({
       currentFilter: e.target.value
     })
   }


  fetchFilters(){
    fetch('/api/fruit_types').then(res => res.json()).then(filters => this.setState({
      filters: filters
    }))
  }

  fetchFruit(){
    fetch('/api/fruit').then(res => res.json()).then(fruit => this.setState({ fruit: fruit}));
  }

  //fetch fruit fetch all fruit by default. and sets it to the fruit state as an array object.

  render (){
    return(
      <FruitBasket filters={this.state.filters} fruit={this.state.fruit} updateFilterCallback={this.handleChange.bind(this)} currentFilter={this.state.currentFilter}/>
    )
  }
  // we compose a render function returning a html document of a fruitbasket component which contains a prop of filters which is the filters array. We also pass it a prop of fruit which is equal to the fruit array of fruits. A updateFilterChangeCallback prob which is set the the handleChange function, a currentFilter prop which is equa lto the currentFilter which in inital state is null.

}

module.exports = App;

//we export our component
