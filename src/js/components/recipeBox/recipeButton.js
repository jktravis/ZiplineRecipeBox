"use strict";

var React = require('react');

var RecipeButton = React.createClass({
  render: function render() {
    return (
      <button className="btn btn-default">Add Recipe</button>
    );
  }
});

module.exports = RecipeButton;
