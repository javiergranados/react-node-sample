import React, { Component } from "react";
import _ from "lodash";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import swal from "sweetalert";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import api from "../api";

class Login extends Component {
  state = {
    login: false,
    disabled: true,
    showPassword: false
  };

  checkCredentials = _.debounce(async () => {
    const result = await api.credentials(
      this.username.current.value,
      this.password.current.value
    );
    this.setState({ disabled: !result });
  }, 800);

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
    this.setState({ login: true });

    const { success, response } = await api.login(
      this.username.current.value,
      this.password.current.value
    );

    this.showResponse(success, response);
    this.reset();
  };

  reset = () => {
    this.setState({ showPassword: false });
    this.username.current.focus();
    this.form.current.reset();
  };

  showResponse = (success, response) => {
    this.setState({ login: false });
    const title = (success && "Good job!") || "Oops";
    const icon = (success && "success") || "error";

    swal(title, response, icon);
  };

  render() {
    const { login, disabled, showPassword } = this.state;

    const primaryButton = (!login && (
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        disabled={disabled}
      >
        Submit
      </Button>
    )) || <CircularProgress />;

    const passwordIcon = (
      <InputAdornment position="end">
        <IconButton
          edge="end"
          onClick={() => this.setState({ showPassword: !showPassword })}
          onMouseDown={event => event.preventDefault()}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );

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
          type={showPassword ? "text" : "password"}
          inputRef={this.password}
          onChange={this.checkCredentials}
          onMouseDown={event =>
            event.target.nodeName === "INPUT" &&
            this.setState({ showPassword: true })
          }
          onMouseUp={event =>
            event.target.nodeName === "INPUT" &&
            this.setState({ showPassword: false })
          }
          InputProps={{
            endAdornment: passwordIcon
          }}
        />
        <span className="login-page--form--buttons">
          {primaryButton}
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
