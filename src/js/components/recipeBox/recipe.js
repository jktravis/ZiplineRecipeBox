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
              Key Lime Pie #{this.props.label}
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
            <li className="list-group-item">Keys</li>
            <li className="list-group-item">Limes</li>
            <li className="list-group-item">Pies</li>
            <li className="list-group-item">Crust</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Recipe;
