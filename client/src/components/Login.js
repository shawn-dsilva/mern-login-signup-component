import React, { Component } from 'react'
import {
  Button
} from "reactstrap";
import { isNullOrUndefined } from 'util';

var divStyle = {
  display: 'inline-block',
  padding: '1rem'
};

export class Login extends Component {
  render() {
    return (
      <div style={divStyle}>
            <Button color="light">Sign In</Button>{' '}
      </div>
    )
  }
}

export default Login
