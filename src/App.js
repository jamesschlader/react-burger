import React, { Component } from "react";
import Heading from "./components/heading";
import MainGrid from "./components/MainGrid";

class App extends Component {
  render() {
    return (
      <div className="uk-container uk-text-justify-center">
        <Heading />
        <div className="uk-section-muted uk-dark">
          <MainGrid />
        </div>
      </div>
    );
  }
}

export default App;
