import React, { Component } from 'react'
import {
  Button
} from "reactstrap";

var divStyle = {
  display: 'inline-block'
};

export class Register extends Component {
  render() {
    return (
      <div style={divStyle}>
            <Button color="light">Register</Button>{' '}
      </div>
    )
  }
}

export default Register
