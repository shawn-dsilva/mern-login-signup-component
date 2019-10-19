import React, { Component } from "react";
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
  Alert,
  Spinner
} from "reactstrap";
import { connect } from "react-redux"; // API to connect component state to redux store
import PropTypes from "prop-types";
import { buttonClicked, isLoading } from "../actions/uiActions";
import { Link } from "react-router-dom";
import { register } from "../actions/authActions";
import "./style.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: ""
  };

  static propTypes = {
    buttonClicked: PropTypes.func.isRequired,
    button: PropTypes.bool,
    register: PropTypes.func.isRequired,
    status: PropTypes.object.isRequired,
    loading: PropTypes.bool
  };

  // Removes sign in and register buttons from homepage
  // upon mounting of Register component
  componentDidMount() {
    this.props.buttonClicked();
  }

  componentDidUpdate(prevProps) {
    const status = this.props.status;

    // Changes status message if it is different from previous message
    if (status !== prevProps.status) {
      if (status.id === "REGISTER_FAIL") {
        this.setState({ msg: status.statusMsg });
      } else {
        this.setState({ msg: this.props.status.statusMsg });
      }
    }

    // Redirects to Log In screen after a delay of 2secs if successfully registered
    if (status.id === "REGISTER_SUCCESS") {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 2000);
    }
  }

  // Sets the value of the input fields to the state items of the same name
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Calls action to register user
  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    const user = { name, email, password };
    this.props.isLoading();
    this.props.register(user);
  };

  render() {
    let className = "divStyle";

    // If HTTP 400 error, render alert with red color, else if
    // it is 200 OK, render alert in green
    let alert;
    if (this.state.msg && this.props.status.respCode >= 400) {
      alert = <Alert color="danger">{this.state.msg}</Alert>;
    } else if (this.state.msg && this.props.status.respCode === 200) {
      alert = (
        <Alert color="success">
          {this.state.msg} <br /> Redirecting to Log In screen
        </Alert>
      );
    }

    if (!this.props.button) {
      className = "formStyle";
    }
    return (
      <div className={className}>
        <Card>
          <CardBody>
            <CardTitle>
              <h2>
                <strong>Register</strong>
              </h2>
            </CardTitle>
            <CardSubtitle className="text-muted">
              Already have an account?
              <Link to="/login"> Log In. </Link>
            </CardSubtitle>
            <br />
            {alert}
            <Form onSubmit={this.onSubmit}>
              <FormGroup className="text-center">
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="mb-3"
                  size="lg"
                  onChange={this.onChange}
                />

                <Label for="email">E-mail</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@youremail.com"
                  className="mb-3"
                  size="lg"
                  onChange={this.onChange}
                />

                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="mb-3"
                  size="lg"
                  onChange={this.onChange}
                />
                <Button color="dark" className="mt-5" size="lg" block>
                { this.props.loading ?
                       <span >Registering.. <Spinner size="sm" color="light" /></span> : <span>Register</span>}
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //Maps state to redux store as props
  button: state.ui.button,
  status: state.status,
  loading: state.ui.loading
});

export default connect(
  mapStateToProps,
  { register, isLoading, buttonClicked }
)(Register);
