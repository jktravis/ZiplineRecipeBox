"use strict";

var React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass({
  propTypes: {
    recipes: React.PropTypes.array.isRequired
  },

  render: function render() {
    var createRecipe = function (item, index) {
      return (<Recipe name={item.name} ingredients={item.ingredients} key={index}
                      label={item.name.replace(/[^a-zA-Z0-9]+/g, '')}/>);
    };
    return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        {this.props.recipes.map(createRecipe, this)}
      </div>
    );
  }
});

module.exports = RecipeList;
