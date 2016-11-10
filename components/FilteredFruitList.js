const React = require('react');

function FilteredFruitList(props){
  let fruitList = (props.filter === 'all' || !props.filter) ? props.fruit :
    props.fruit.filter(fructus => fructus.fruit_type == props.filter);

    return (
      <ul className="fruit-list">
        {fruitList.map((i,idx) => <li key={idx}>{i.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  fruit: [], filter: 'all'
}

module.exports = FilteredFruitList;
