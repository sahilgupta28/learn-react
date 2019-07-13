import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import "./styles.css";

class App extends React.Component {
  state = {
    shape: "rectangle"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        shape: "rectangle"
      });
    }, 2000);
  }

  render() {
    return (
      <>
        <Button name="Test1" />
        <Button name={this.state.shape} />
        <Button />
        <Button />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);