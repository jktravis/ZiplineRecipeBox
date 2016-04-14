"use strict";

var React = require('react');

var RecipeModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    modalId: React.PropTypes.string.isRequired
  },

  render: function render() {
    return (
      <div className="modal fade" id={this.props.modalId} role="dialog" aria-labelledby={this.props.modalId + "Label"}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id={this.props.modalId + "Label"}>{this.props.title}</h4>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RecipeModal;
