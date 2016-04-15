"use strict";

var React = require('react');
var RecipeButton = require('./recipeButton');
var RecipeList = require('./recipeList');
var RecipeModal = require('./recipeModal');
var Constants = require('../../constants');

//noinspection JSUnusedGlobalSymbols
var RecipeBox = React.createClass({

  /**
   * Initializes the state with the current set of storage items.
   * @returns {*} returns {recipes:[]}
   */
  getInitialState: function () {
    return this.getStorageData();
  },

  /**
   * Deletes the recipe provided in the event. Uses a data-name attribute on the button as the key.
   * @param {event} event is a react-flavored event object.
   * @return {*} No return value.
   */
  onDelete: function (event) {
    var storage = window.localStorage;
    var item = $(event.target).data('name');
    storage.removeItem(Constants.STORAGE_PREFIX + item);
    var data = this.getStorageData();
    this.setState(data);
  },

  /**
   * Sets the initial data up. Mostly for testing purposes.
   * @return {*} No return value.
   */
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

    initialData.map(this.saveRecipe);
  },

  componentWillMount: function () {
    var data = this.getStorageData();
    if (data.recipes.length === 0) {
      this.setInitialData();
    }
    this.setState(this.getStorageData());
  },

  getStorageData: function () {
    var storage = window.localStorage;
    var keys = Object.keys(storage);
    var data = {recipes: []};

    for (var i = 0; i < keys.length; i++) {
      data.recipes.push(JSON.parse(storage.getItem(keys[i])));
    }
    return data;
  },

  editModal: function (event) {
    var name = $(event.target).data('name');
    var recipe = this.getRecipe(name);
    $('#recipeTitle').val(name);
    $('#ingredientList').val(recipe.ingredients.join(','));
  },

  onSave: function (event) {
    var modalid = $(event.target).data('modalid');
    var title = $('#recipeTitle');
    var ingredients = $('#ingredientList');
    $('#' + modalid).modal('hide');

    var recipe = {
      name: title.val(),
      ingredients: ingredients.val().split(',')
    };

    this.saveRecipe(recipe);

    ingredients.val('');
    title.val('');
    this.setState(this.getStorageData());
  },

  getRecipe: function (name) {
    return JSON.parse(window.localStorage.getItem(Constants.STORAGE_PREFIX + name));
  },

  saveRecipe: function (recipe) {
    window.localStorage.setItem(Constants.STORAGE_PREFIX + recipe.name, JSON.stringify(recipe));
  },

  render: function render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-8 col-lg-offset-2 row">
          <h1 className="text-primary text-center">Recipe Box</h1>
        </div>

        <div className="col-lg-8 col-lg-offset-2 well row">
          <RecipeList recipes={this.state.recipes} onDelete={this.onDelete} onEdit={this.editModal}/>
        </div>

        <div className="col-lg-8 col-lg-offset-2 row">
          <RecipeButton/>
        </div>
        <RecipeModal title="Create/Edit Recipe" modalId="createEditRecipe" onSave={this.onSave}/>
      </div>
    );
  }
});

module.exports = RecipeBox;
