"use strict";

var React = require('react');

var RecipeButton = React.createClass({
  render: function render() {
    return (
      <button className="btn btn-primary btn-lg">Add Recipe</button>
    );
  }
});

module.exports = RecipeButton;
