import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador1: 0,
      contador2: 0,
      contador3: 0,
    };

    this.botao1 = this.botao1.bind(this);
    this.botao2 = this.botao2.bind(this);
    this.botao3 = this.botao3.bind(this);
  }

  async botao1() {
    await this.setState((lastState, _props) => ({
      contador1: lastState.contador1 + 1,
    }));

    let button = document.getElementsByTagName("button")[0];
    if (this.state.contador1 % 2 === 0) {
      button.style.backgroundColor = "green";
    } else button.style.backgroundColor = '';
  }

  botao2 = () => {
    this.setState((lastState, _props) => ({
      contador2: lastState.contador2 + 1,
    }));
  };

  botao3 = () => {
    this.setState((lastState, _props) => ({
      contador3: lastState.contador3 + 1,
    }));
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.botao1();
          }}
        >
          {this.state.contador1}
        </button>
        <button onClick={this.botao2}>{this.state.contador2}</button>
        <button onClick={this.botao3}>{this.state.contador3}</button>
      </>
    );
  }
}

export default App;
