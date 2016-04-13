require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
require('bootstrap');
require('../css/main.scss');
require('../../vendor/x-editable/bootstrap3-editable/css/bootstrap-editable.css');
require('../../vendor/x-editable/bootstrap3-editable/js/bootstrap-editable.min');

$.fn.editable.defaults.mode = 'inline';

$(document).ready(function () {
  $('.list-group-item').editable({
    type: 'text',
    title: 'Edit Item'
  });
});

var RecipeBox = require('./components/recipeBox/recipeBox');

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <RecipeBox />,
  document.getElementById('app')
);

