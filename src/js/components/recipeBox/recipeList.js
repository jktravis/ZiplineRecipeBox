"use strict";

var React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass({
  render: function render() {
    return (
      <ul>
        <Recipe/>
      </ul>
    );
  }
});

module.exports = RecipeList;
