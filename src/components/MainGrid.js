import React, { Component } from "react";
import Burgers from "./burgers";
import AddBurger from "./AddBurger";
import Eaten from "./Eaten";

export default class MainGrid extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      burgers: []
    };
  }
  componentDidMount() {
    fetch("/api/customers")
      .then(result => result.json())
      .then(burgers =>
        this.setState({ burgers }, () =>
          console.log(`Burgers fetched from the ${this} component`, burgers)
        )
      );
  }

  getBurgerName = event => {
    console.dir(event.target.value);

    event.preventDefault();
    this.setState({
      name: event.target.value
    });
    console.log(`here's the state.name: ${this.state.name}`);
  };

  submitName = event => {
    console.dir();
    event.preventDefault();

    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: this.state.name, devoured: false })
    })
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(response => {
        console.log(`Success: `, JSON.stringify(response));
        fetch("/api/customers")
          .then(result => result.json())
          .then(burgers =>
            this.setState({ burgers }, () =>
              console.log(`Burgers fetched from the ${this} component`, burgers)
            )
          );
      });
  };

  handleEdit = (id, devoured) => event => {
    console.log(`id for edit is ${id}`);
    console.log(`devoured state for edit is ${devoured}`);
    event.preventDefault();

    fetch(`/api/burgers/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ devoured: devoured, id: id })
    })
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(response => {
        console.log(`Success: `, JSON.stringify(response));
        fetch("/api/customers")
          .then(result => result.json())
          .then(burgers =>
            this.setState({ burgers }, () =>
              console.log(`Burgers fetched from the ${this} component`, burgers)
            )
          );
      });
  };

  handleDelete = id => event => {
    console.log(`id for delete is ${id}`);
    event.preventDefault();

    fetch(`/api/burgers/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    })
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(response => {
        console.log(`Success: `, JSON.stringify(response));
        fetch("/api/customers")
          .then(result => result.json())
          .then(burgers =>
            this.setState({ burgers }, () =>
              console.log(`Burgers fetched from the ${this} component`, burgers)
            )
          );
      });
  };

  render() {
    return (
      <div
        className="uk-container uk-grid-medium uk-grid-divider uk-grid-match uk-child-width-1-2 "
        uk-grid="true"
      >
        <Burgers
          burgers={this.state.burgers}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />

        <Eaten
          burgers={this.state.burgers}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />

        <AddBurger onSubmit={this.submitName} value={this.getBurgerName} />
      </div>
    );
  }
}
