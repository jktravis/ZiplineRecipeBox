"use strict";

var React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass({
  propTypes: {
    recipes: React.PropTypes.array.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },

  render: function render() {
    var createRecipe = function (item) {
      return (<Recipe name={item.name} ingredients={item.ingredients} key={item.name}
                      label={item.name.replace(/[^a-zA-Z0-9]+/g, '')} onDelete={this.props.onDelete}/>);
    };
    return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        {this.props.recipes.map(createRecipe, this)}
      </div>
    );
  }
});

module.exports = RecipeList;
