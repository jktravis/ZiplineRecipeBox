"use strict";

var React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass({
  render: function render() {
    return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <Recipe name="Key Lime Pie" ingredients={["Keys", "Limes", "Pies"]} label="KeyLimePie"/>
        <Recipe name="Ham Sandwich" ingredients={["Ham", "Cheese", "Bread"]} label="HamSandwich"/>
        <Recipe name="Meatloaf" ingredients={["Meat", "Loaf", "Ketchup"]} label="Meatloaf"/>
      </div>
    );
  }
});

module.exports = RecipeList;
