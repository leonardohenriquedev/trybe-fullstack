import React from "react";

class SenhaInput extends React.Component {
  render() {
    const {handleChange, senha} = this.props
    return (
      <label>
          Senha
          <input
            name="senha"
            type="password"
            onChange={(event) => handleChange(event)}
            value={senha}
          ></input>
        </label>
    );
  }
}

export default SenhaInput;
