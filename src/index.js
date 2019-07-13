import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    re: "rectangle",
    ra: "radius",
    ov: "oval",
    s: "small",
    m: "medium",
    l: "large"
  };

  render() {
    return (
      <>
        <Button shape={this.state.re} size={this.state.l}/>
        <Button shape={this.state.re} size={this.state.m}/>
        <Button shape={this.state.re} size={this.state.s}/>
        <br/>
        <Button shape={this.state.ra} size={this.state.l} />
        <Button shape={this.state.ra} size={this.state.m} />
        <Button shape={this.state.ra} size={this.state.s} />
        <br/>
        <Button shape={this.state.ov} size={this.state.l} />
        <Button shape={this.state.ov} size={this.state.m} />
        <Button shape={this.state.ov} size={this.state.s} />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);