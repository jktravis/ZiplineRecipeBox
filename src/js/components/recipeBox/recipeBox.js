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
    var item = this.getClickedButton(event).data('name');
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
        name: "Awesome Sauce",
        ingredients: ['Awesome', 'Sauce']
      },
      {
        name: "Ham Sandwich",
        ingredients: ['Ham', 'Cheese', 'Bread']
      }
    ];

    // Sets up initial data. We only want to do it once.
    if (window.localStorage.getItem(Constants.PRELOAD_DATA_TRIGGER) !== Constants.PRELOAD_DATA_TRIGGER) {
      initialData.map(this.saveRecipe);
    }
    window.localStorage.setItem(Constants.PRELOAD_DATA_TRIGGER, Constants.PRELOAD_DATA_TRIGGER);
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
      if (keys[i].substring(0, Constants.STORAGE_PREFIX.length) === Constants.STORAGE_PREFIX) {
        data.recipes.push(JSON.parse(storage.getItem(keys[i])));
      }
    }
    return data;
  },

  /**
   * In the case of Chrome (and maybe others), returns the <button> that
   * wraps the <span> that is sent back on the event.
   * @param {event} event is a synthetic from React.
   * @returns {*|jQuery|HTMLElement} A jQuery-wrapped <button/> element.
   */
  getClickedButton: function (event) {
    var evtTarget = $(event.target);
    if (evtTarget.is('span')) {
      evtTarget = evtTarget.parent();
    }
    return evtTarget;
  },

  editModal: function (event) {
    var evtTarget = this.getClickedButton(event);

    var name = evtTarget.data('name');
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

  /**
   * Clears <input/> fields in the modal.
   * @param {modal} modal is the top-level Bootstrap modal element.
   * @returns {undefined} no return value.
   */
  clearModalFields: function (modal) {
    $(modal).find('input').val('');
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
        <RecipeModal title="Create/Edit Recipe" modalId="createEditRecipe" onDismiss={this.clearModalFields}
                     onSave={this.onSave}/>
      </div>
    );
  }
});

module.exports = RecipeBox;
