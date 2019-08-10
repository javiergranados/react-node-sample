import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
  state = {
    error: false,
    disabled: false
  };

  componentWillMount() {
    this.createRefs();
  }

  createRefs = () => {
    this.form = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
  };

  submit = event => {
    event.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    console.log(username, password);

    this.reset();
  };

  reset = () => {
    this.username.current.focus();
    this.form.current.reset();
  };

  render() {
    const { error, disabled } = this.state;

    return (
      <form
        className="login-page--form"
        ref={this.form}
        onSubmit={this.submit}
        onReset={this.reset}
      >
        <TextField
          label="username"
          variant="outlined"
          required
          autoFocus
          inputRef={this.username}
        />
        <TextField
          label="Password"
          variant="outlined"
          required
          type="password"
          error={error}
          inputRef={this.password}
        />
        <span className="login-page--form--buttons">
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            disabled={disabled}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="outlined"
            color="secondary"
            className="login-page--form--buttons__clear"
          >
            Clear
          </Button>
        </span>
      </form>
    );
  }
}

export default Login;
