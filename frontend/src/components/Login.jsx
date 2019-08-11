import React, { Component } from "react";
import _ from "lodash";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import api from "../api";

class Login extends Component {
  state = {
    disabled: true
  };

  checkCredentials = _.debounce(async () => {
    const result = await api.credentials(
      this.username.current.value,
      this.password.current.value
    );
    this.setState({ disabled: !result });
  }, 500);

  componentWillMount() {
    this.createRefs();
  }

  createRefs = () => {
    this.form = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
  };

  submit = async event => {
    event.preventDefault();
    const { response, error } = await api.login(
      this.username.current.value,
      this.password.current.value
    );

    this.showResponse(response, error);
    this.reset();
  };

  reset = () => {
    this.username.current.focus();
    this.form.current.reset();
  };

  showResponse = (response, error) => {
    if (error) {
      console.error(response);
    } else {
      console.log(response);
    }
  };

  render() {
    const { disabled } = this.state;

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
          onChange={this.checkCredentials}
        />
        <TextField
          label="Password"
          variant="outlined"
          required
          type="password"
          inputRef={this.password}
          onChange={this.checkCredentials}
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
