import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    error: false,
    disabled: false,
  }

  submit = event => {
    event.preventDefault();
    const user = this.user.value
    const password = this.password.value
    console.log(user, password);

    this.reset();
  }

  reset = () =>  {
    this.user.focus();
    this.form.reset();
  }

  render () {
    return (
      <div className="login-page">
        <h1>Login page</h1>
        <form className="login-page--form" ref={form => this.form = form} onSubmit={this.submit} onReset={this.reset}>
          <TextField
            label="User"
            variant="outlined"
            required
            autoFocus
            inputRef={ref => this.user = ref}
          />
          <TextField
            label="Password"
            variant="outlined"
            required
            type="password"
            error={this.state.error}
            inputRef={ref => this.password = ref}
          />
          <span className="login-page--form--buttons">
            <Button type='submit' variant="outlined" color="primary"  disabled={this.state.disabled}>
                Submit
            </Button>
            <Button type='reset' variant="outlined" color="secondary" className="login-page--form--buttons__clear" >
              Clear
            </Button>
          </span>
        </form>
      </div>
    )
  }
}

export default App
