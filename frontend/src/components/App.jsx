import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class App extends Component {
  state = {
    error: false
  }

  render () {
    return (
      <div className="login-page">
        <h1>Login page</h1>
        <TextField
          required
          autoFocus
          label="User"
          variant="outlined"
        />
        <TextField
          required
          error={this.state.error}
          type="password"
          label="Password"
          variant="outlined"
        />
      </div>
    )
  }
}

export default App
