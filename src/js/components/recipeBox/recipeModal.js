"use strict";

var React = require('react');

//noinspection JSUnusedGlobalSymbols
var RecipeModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    modalId: React.PropTypes.string.isRequired,
    onDismiss: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired
  },

  componentDidMount: function () {
    var $modal = $('#' + this.props.modalId);
    var self = this;

    $modal.on('hidden.bs.modal', function () {
      self.props.onDismiss(this);
    });

    $modal.find('button[data-modalid]').on('click', this.props.onSave);
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
              <label htmlFor="recipeTitle">Recipe Title</label>
              <input className="form-control" type="text" placeholder="Recipe Title"
                     name="recipeTitle" id="recipeTitle"/>
              <label htmlFor="ingredientList">Ingredients (comma separated)</label>
              <input className="form-control" type="text" placeholder="Ingredients (comma separated)"
                     name="ingredientList" id="ingredientList"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-modalid={this.props.modalId}>Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RecipeModal;
