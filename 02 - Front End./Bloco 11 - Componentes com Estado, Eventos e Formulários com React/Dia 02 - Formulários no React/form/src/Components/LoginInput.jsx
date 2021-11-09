import React from "react";

class LoginInput extends React.Component {
  render() {
    const { handleChange, email, haveErrors } = this.props;
    let erro = undefined;

    return (
      <div>
        <label>
          Login
          <input
            name="email"
            type="email"
            onChange={(event) => handleChange(event)}
            value={email}
            placeholder="Digite seu Email"
          ></input>
        {(erro = email.includes("@") ? "" : " Email incompleto")}
        </label>
      </div>
    );
  }
}

export default LoginInput;
