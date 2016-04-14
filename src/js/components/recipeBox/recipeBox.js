"use strict";

var React = require('react');
var RecipeButton = require('./recipeButton');
var RecipeList = require('./recipeList');

var RecipeBox = React.createClass({
  getInitialState: function () {
    var storage = window.localStorage;
    var keys = Object.keys(storage);
    var data = {recipes: []};
    // some sample data to get things started.
    if (keys.length === 0) {
      let initialData = [
        {
          name: "Key Lime Pie",
          ingredients: ['Keys', 'Limes', 'Pies']
        },
        {
          name: "Meatloaf",
          ingredients: ['Meat', 'Loaf', 'Ketchup']
        },
        {
          name: "Ham Sandwich",
          ingredients: ['Ham', 'Cheese', 'Bread']
        }
      ];

      initialData.map(function (recipe) {
        storage.setItem('jktravis_recipes_' + recipe.name, JSON.stringify(recipe));
      });
    }

    for (var i = 0; i < keys.length; i++) {
      data.recipes.push(JSON.parse(storage.getItem(keys[i])));
    }
    return data;
  },

  render: function render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-8 col-lg-offset-2 row">
          <h1 className="text-primary text-center">Recipe Box</h1>
        </div>

        <div className="col-lg-8 col-lg-offset-2 well row">
          <RecipeList recipes={this.state.recipes}/>
        </div>

        <div className="col-lg-8 col-lg-offset-2 row">
          <RecipeButton/>
        </div>
      </div>
    );
  }
});

module.exports = RecipeBox;
