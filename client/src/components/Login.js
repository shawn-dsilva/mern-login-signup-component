import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
   CardTitle,
   CardSubtitle,
  CardBody,
  Alert
} from "reactstrap";
import { connect } from "react-redux"; // API to connect component state to redux store
import PropTypes from "prop-types";
import { buttonClicked } from "../actions/uiActions";
import { login } from "../actions/authActions";

import { Link } from 'react-router-dom'
import './style.css';



class Login extends Component {

  state = {
    email: "",
    password: "",
    msg: ""
  }

  static propTypes = {
    buttonClicked: PropTypes.func.isRequired,
    button: PropTypes.bool,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    status: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.buttonClicked();
}

componentDidUpdate(prevProps) {
      const status = this.props.status;

     if (status !== prevProps.status) {

      if (status.id === "LOGIN_FAIL") {
        this.setState({ msg: status.statusMsg.msg });
      }
    }
};


onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

onSubmit = (e) => {
    e.preventDefault();

    const { email, password} = this.state;

    const user = { email, password};

    this.props.login(user);
  };


  render() {

    let className = 'divStyle';
    if (!this.props.button) {
      className = 'formStyle';
    }
    return (
      <div className={className}>

            <Card>
                <CardBody >
                  <CardTitle> <h2><strong>Login</strong></h2></CardTitle>
                <CardSubtitle className="text-muted">Don't have an account?
                <Link to="/register"> Register. </Link></CardSubtitle>
                <br/>

                {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
                  <Form onSubmit={this.onSubmit} >
                  <FormGroup>

                    <Label for="email">E-mail</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@youremail.com"
                      className="mb-3"
                      onChange={this.onChange}
                    />

                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Login
                    </Button>
                  </FormGroup>
                </Form>
                </CardBody>
            </Card>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //Maps state element in redux store to props
  //location of element in the state is on the right and key is on the left
  button: state.ui.button, //store.getState().ui.button another way to get button bool
  isAuthenticated: state.auth.isAuthenticated,
  status: state.status
});

export default connect(mapStateToProps,{ login, buttonClicked })(Login);
