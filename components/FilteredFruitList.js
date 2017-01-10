const React = require('react');
const { Component } = require('react');



const FilteredFruitList = (props) => {
  const list = !props.filter ? props.fruit :
    props.fruit.filter(i => i.fruit_type == props.filter);
  return (

    <ul className="fruit-list">
      {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  )
}

//filter fruits will go through its fitlers prop and check if the fruits filter_type is equal to the filter object and we render all the fruits character key.

FilteredFruitList.defaultProps = {fruit: [], filter: "all"}

module.exports = FilteredFruitList;
