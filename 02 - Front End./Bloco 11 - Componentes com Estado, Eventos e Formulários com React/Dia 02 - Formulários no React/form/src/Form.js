import React from "react";
import "./App.css";
import LoginInput from "./Components/LoginInput";
import SenhaInput from "./Components/SenhaInput";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      senha: "",
      país: "Brasil",
      sobre: "",
      linguagem: "",
      formularioComErros: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="form">
        <LoginInput
          handleChange={this.handleChange}
          email={this.state.email}
          haveErrors={this.haveErrors}
        />

        <SenhaInput handleChange={this.handleChange} senha={this.state.senha} />

        <label>
          País
          <select
            name="país"
            onChange={(event) => this.handleChange(event)}
            value={this.state.país}
          >
            <option>Brasil</option>
            <option>Argentina</option>
          </select>
        </label>

        <label>
          Sobre Você
          <textarea
            name="sobre"
            onChange={(event) => this.handleChange(event)}
            value={this.state.sobre}
          ></textarea>
        </label>

        <label>
          JavaSscript
          <input
            type="checkbox"
            name="linguagem"
            onChange={(event) => this.handleChange(event)}
            value={this.state.linguagem}
          ></input>
        </label>
      </div>
    );
  }
}

export default Form;
