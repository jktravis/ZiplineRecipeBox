"use strict";

var React = require('react');
var RecipeButton = require('./recipeButton');
var RecipeList = require('./recipeList');

var RecipeBox = React.createClass({
  render: function render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-8 col-lg-offset-2 row">
          <h1 className="text-primary text-center">Recipe Box</h1>
        </div>

        <div className="col-lg-8 col-lg-offset-2 well row">
          <RecipeList />
        </div>

        <div className="col-lg-8 col-lg-offset-2 row">
          <RecipeButton/>
        </div>
      </div>
    );
  }
});

module.exports = RecipeBox;
