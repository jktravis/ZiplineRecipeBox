"use strict";

var React = require('react');

var Recipe = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.array.isRequired
  },

  render: function render() {
    var createList = function (item, index) {
      return (
        <li className="list-group-item" key={index}>{item}</li>
      );
    };

    return (
      <div className="panel">
      <div className="panel-heading" role="tab" id={"heading" + this.props.label}>
          <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
               href={"#collapse" + this.props.label} aria-expanded="false"
               aria-controls={"collapse" + this.props.label}>
              {this.props.label}
            </a>
            <button className="btn btn-sm btn-link">
              <span className="glyphicon glyphicon-pencil text-muted"/>
            </button>
            <button className="btn btn-sm btn-link">
              <span className="glyphicon glyphicon-trash text-muted"/>
            </button>
          </h4>
        </div>
        <div id={"collapse" + this.props.label} className="panel-collapse collapse" role="tabpanel"
             aria-labelledby={"heading" + this.props.label}>
          <ul className="list-group">
            {this.props.ingredients.map(createList, this)}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Recipe;
