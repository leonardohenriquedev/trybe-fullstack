import React from "react";
import "../App.css";
import estados from "./dataEstados";

let cont = 0;
class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      email: "",
      endereco: "",
      cidade: "",
      estado: "Acre",
      tipo: "",
      resumo: "",
      cargo: "",
      descricao: "",
    };

    this.toUpperCase = this.toUpperCase.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.specialCharactersCleaner = this.specialCharactersCleaner.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
  }

  toUpperCase(event) {
    this.setState({
      nome: event.target.value.toUpperCase(),
    });
  }

  handleInput({ target }) {
    const { name } = target;
    console.log(target.type);
    console.log(target.id);
    const value = target.type === "radio" ? target.id : target.value;

    this.setState({
      [name]: value,
    });
  }

  specialCharactersCleaner(event) {
    this.setState({
      endereco: event.target.value.replace(/[^a-zA-Z ]/g, ""),
    });
  }

  handleCity({ target }) {
    if (!isNaN(target.value[0])) {
      this.setState({
        cidade: "",
      });
    }
  }

  mouseEnter() {
    if (cont !== 1) {
      alert("Preencha com cuidado esta informação.");
      cont = 1;
    }
  }

  render() {
    return (
      <form action="submit" className="curriculo">
        <fieldset>
          <legend>Informações do Currículo</legend>
          <label htmlFor="name">Nome </label>
          <input
            type="text"
            name="name"
            maxLength="40"
            value={this.state.inputText}
            onChange={this.toUpperCase}
            required
          />
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            maxLength="50"
            value={this.state.email}
            onChange={this.handleInput}
            required
          />
          <label htmlFor="endereco">Endereço </label>
          <input
            type="endereco"
            name="endereco"
            maxLength="200"
            value={this.state.endereco}
            onChange={this.specialCharactersCleaner}
            required
          />
          <label htmlFor="cidade">Cidade </label>
          <input
            type="cidade"
            name="cidade"
            maxLength="28"
            value={this.state.cidade}
            onChange={this.handleInput}
            onBlur={this.handleCity}
            required
          />
          <label htmlFor="estado">Estado </label>
          <select
            type="estado"
            name="estado"
            value={this.state.estado}
            onChange={this.handleInput}
            required
          >
            {estados.map((estado) => (
              <option key={estado.nome}>{estado.nome}</option>
            ))}
          </select>
          <label htmlFor="tipo">Tipo </label>
          <label htmlFor="casa">
            Casa
            <input
              type="radio"
              name="tipo"
              value={this.state.casa}
              id="casa"
              onChange={this.handleInput}
            />
          </label>
          <label>
            Apartamento
            <input
              type="radio"
              name="tipo"
              value={this.state.apto}
              id="apto"
              onChange={this.handleInput}
            />
          </label>
        </fieldset>

        <fieldset>
        <legend>Dados do Último Emprego</legend>
          <label htmlFor="resumo">Resumo </label>
          <textarea
            type="textarea"
            name="resumo"
            maxLength="1000"
            value={this.state.resumo}
            onChange={this.handleInput}
            required
          />
          <label htmlFor="cargo">Cargo </label>
          <textarea
            className="cargo"
            type="textarea"
            name="cargo"
            maxLength="40"
            value={this.state.cargo}
            onChange={this.handleInput}
            onMouseEnter={this.mouseEnter}
            required
          />
          <label htmlFor="descricao">Descrição </label>
          <textarea
            type="textarea"
            name="descricao"
            maxLength="500"
            value={this.state.descricao}
            onChange={this.handleInput}
            required
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
