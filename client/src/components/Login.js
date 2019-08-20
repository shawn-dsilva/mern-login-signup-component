import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux"; // API to connect component state to redux store
import PropTypes from "prop-types";
import { buttonClicked } from "../actions/uiActions";
import store from '../store';



var divStyle = {
  display: 'inline-block',
  padding: '1rem'
};

const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.button
});


class Login extends Component {

  state = {
  display: false,
  // button: true,
};

  static propTypes = {
    buttonClicked: PropTypes.func.isRequired,
  };

showForm = () => {
  this.setState({
    display:true,
    // button:false
  });

  this.props.buttonClicked();
};

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

onSubmit = (e) => {
    e.preventDefault();
  };


  render() {
    return (
      <div style={divStyle}>
        {console.log(store.getState().ui.button)}
        {console.log(this.state)}
        {store.getState().ui.button && <Button onClick={this.showForm} color="light">Sign In</Button>}


            {this.state.display && <Form onSubmit={this.onSubmit}>
              <FormGroup>

                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-3"
                  onChange={this.onChange}
                />

                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Login
                </Button>
              </FormGroup>
            </Form>
            }


      </div>
    )
  }
}


export default connect(mapStateToProps,{ buttonClicked ,})(Login);
