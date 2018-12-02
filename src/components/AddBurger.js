import React, { Component } from "react";

export default class AddBurger extends Component {
  render() {
    return (
      <div className="uk-margin-large">
        <form id="burgerGet">
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Add a Burger to the Menu</legend>

            <div className="uk-margin">
              <input
                className="uk-input uk-form-width-large"
                type="text"
                placeholder="Name"
                //value={this.props.getBurgerName}
                onChange={this.props.value}
              />
              <button
                onClick={this.props.onSubmit}
                className="uk-button uk-button-primary uk-margin uk-display-block"
              >
                Add Burger
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
