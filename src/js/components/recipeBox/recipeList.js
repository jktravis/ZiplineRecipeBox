"use strict";

var React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass({
  render: function render() {
    return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <Recipe label={1}/>
        <Recipe label={2}/>
        <Recipe label={3}/>
      </div>
    );
  }
});

module.exports = RecipeList;
