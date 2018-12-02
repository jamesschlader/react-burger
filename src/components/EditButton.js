import React, { Component } from "react";

export default class EditButton extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      devoured: false
    };
  }
  handleInput = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
    console.log(`here's the state.name: ${this.state.name}`);
  };
  addInput = event => {
    console.log(
      `inside the addInput method on the EditButton component, here's the event: `,
      console.dir(event)
    );
    event.preventDefault();
    return (
      <form>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            placeholder="Rename Burger"
            value={this.handleInput}
          />
          <button
            onClick={this.props.onEdit(this.props.id, this.state.name)}
            className="uk-button uk-button-primary"
          >
            Submit
          </button>
        </div>
      </form>
    );
  };

  render() {
    return (
      <div>
        {!this.props.devoured ? (
          <button
            onClick={this.props.onEdit(this.props.id, !this.props.devoured)}
            className="uk-button uk-button-primary uk-button-small"
          >
            Devour!
          </button>
        ) : (
          <button
            onClick={this.props.onDelete(this.props.id)}
            className="uk-button uk-button-danger uk-button-small"
          >
            Delete
          </button>
        )}
      </div>
    );
  }
}
