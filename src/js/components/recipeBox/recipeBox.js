"use strict";

var React = require('react');
var RecipeButton = require('./recipeButton');
var RecipeList = require('./recipeList');
var Constants = require('../../constants');

var RecipeBox = React.createClass({
  getInitialState: function () {
    return this.getStorageData();
  },

  onDelete: function (event) {
    var storage = window.localStorage;
    var item = $(event.target).data('name');
    storage.removeItem(Constants.STORAGE_PREFIX + item);
    var data = this.getStorageData();
    console.log(data);
    console.log(event.target);
    this.setState(data);
  },

  setInitialData: function () {
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
      window.localStorage.setItem(Constants.STORAGE_PREFIX + recipe.name, JSON.stringify(recipe));
    });
  },

  getStorageData: function () {
    var storage = window.localStorage;
    var keys = Object.keys(storage);
    var data = {recipes: []};
    // some sample data to get things started.
    if (keys.length === 0) {
      this.setInitialData();
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
          <RecipeList recipes={this.state.recipes} onDelete={this.onDelete} />
        </div>

        <div className="col-lg-8 col-lg-offset-2 row">
          <RecipeButton/>
        </div>
      </div>
    );
  }
});

module.exports = RecipeBox;
