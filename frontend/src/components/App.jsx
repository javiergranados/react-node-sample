import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    error: false,
    disabled: false
  };

  componentWillMount() {
    this.createRefs();
  }

  createRefs = () => {
    this.form = React.createRef();
    this.user = React.createRef();
    this.password = React.createRef();
  };

  submit = event => {
    event.preventDefault();
    const user = this.user.current.value;
    const password = this.password.current.value;
    console.log(user, password);

    this.reset();
  };

  reset = () => {
    this.user.current.focus();
    this.form.current.reset();
  };

  render() {
    const { error, disabled } = this.state;

    return (
      <div className="login-page">
        <h1>Login page</h1>
        <form
          className="login-page--form"
          ref={this.form}
          onSubmit={this.submit}
          onReset={this.reset}
        >
          <TextField
            label="User"
            variant="outlined"
            required
            autoFocus
            inputRef={this.user}
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
      </div>
    );
  }
}

export default App;
