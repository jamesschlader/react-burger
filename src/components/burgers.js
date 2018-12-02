import React, { Component } from "react";
import EditButton from "./EditButton";

class Burgers extends Component {
  render() {
    return (
      <div className="uk-container ">
        <h3 className="uk-text-center uk-text-bold">MENU</h3>
        <ul className="uk-list uk-list-divider uk-margin ">
          {this.props.burgers.map(
            burger =>
              !burger.devoured && (
                <li
                  className="uk-padding-large uk-box-shadow-medium uk-text-lead"
                  key={burger.id}
                >
                  {burger.burger_name}
                  <EditButton
                    id={burger.id}
                    devoured={burger.devoured}
                    onEdit={this.props.onEdit}
                    onDelete={this.props.onDelete}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}

export default Burgers;
