"use strict";

var React = require('react');

var Recipe = React.createClass({
  propTypes: {
    label: React.PropTypes.number.isRequired
  },

  render: function render() {
    return (
      <div className="panel">
      <div className="panel-heading" role="tab" id={"heading" + this.props.label}>
          <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
               href={"#collapse" + this.props.label} aria-expanded="false"
               aria-controls={"collapse" + this.props.label}>
              Collapsible Group Item #{this.props.label}
            </a>
          </h4>
        </div>
        <div id={"collapse" + this.props.label} className="panel-collapse collapse" role="tabpanel"
             aria-labelledby={"heading" + this.props.label}>
          <ul className="list-group">
            <li className="list-group-item">food</li>
            <li className="list-group-item">food</li>
            <li className="list-group-item">food</li>
            <li className="list-group-item">food</li>
          </ul>
          <button className="btn btn-danger btn-sm">Delete</button>
          <button className="btn btn-default btn-sm">Edit</button>
        </div>
      </div>
    );
  }
});

module.exports = Recipe;
