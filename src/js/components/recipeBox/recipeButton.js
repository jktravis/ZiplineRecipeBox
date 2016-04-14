"use strict";

var React = require('react');

var RecipeButton = React.createClass({
  render: function render() {
    return (
      <button className="btn btn-default" data-toggle="modal" data-target="#createNewRecipe">Add Recipe</button>
    );
  }
});

module.exports = RecipeButton;
