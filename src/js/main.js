require('../../vendor/bootstrap/css/bootstrap.css');
require('../../vendor/bootstrap/css/bootstrap-theme.css');
require('../../vendor/bootstrap/js/bootstrap');
require('../css/main.scss');

var RecipeBox = require('./components/recipeBox/recipeBox');

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <RecipeBox />,
  document.getElementById('app')
);

