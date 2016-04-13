require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
require('bootstrap');
require('../css/main.scss');

var RecipeBox = require('./components/recipeBox/recipeBox');

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <RecipeBox />,
  document.getElementById('app')
);

