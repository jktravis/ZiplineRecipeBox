require('../../vendor/bootstrap/css/bootstrap.css');
require('../../vendor/bootstrap/css/bootstrap-theme.css');
require('../../vendor/bootstrap/js/bootstrap');
require('../css/main.scss');

var App = require('./components/app');

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

