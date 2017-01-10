const React = require('react');
const { Component } = require('react');

const Filter = (props) => {
  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value="all">All</option>
      {props.filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
    </select>
  );
}
//this component has a onchange funching which points to the onchange function. defaultValue is an attr for the select obj to a  default all. Top level option is all and the later on options are a option for each filter option. So if I pick any of the options it will trigger the handleChange function in the app which will change the fruit category name

Filter.defaultProps = {filters: [], handleChange: function() {} }

module.exports = Filter;
