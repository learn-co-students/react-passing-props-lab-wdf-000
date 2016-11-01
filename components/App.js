const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		}
	}

	render () {
		return (
			<div>
				<FruitBasket />
			</div>
		)
	}
}

module.exports = App;