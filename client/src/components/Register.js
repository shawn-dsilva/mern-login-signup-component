import React, { Component } from 'react'
import {
  Button
} from "reactstrap";
import {connect} from 'react-redux';

var divStyle = {
  display: 'inline-block'
};


class Register extends Component {

    state = {
  display: false,
};

  render() {
    return (
      <div style={divStyle}>
           {this.props.button && <Button color="light">Register</Button>}
           {/* <Button color="light">Register</Button> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.ui.button
});

export default connect(mapStateToProps)(Register);
