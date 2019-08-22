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
   Col,
  CardBody
} from "reactstrap";
import { connect } from "react-redux"; // API to connect component state to redux store
import PropTypes from "prop-types";
import { buttonClicked } from "../actions/uiActions";
import { Link } from 'react-router-dom'
import './style.css';


class Register extends Component {


static propTypes = {
    buttonClicked: PropTypes.func.isRequired,
    button: PropTypes.bool,

  };


onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

onSubmit = (e) => {
    e.preventDefault();
  };


  render() {
      this.props.buttonClicked();
    let className = 'divStyle';
    if (!this.props.button) {
      className = 'formStyle';
    } return (
      <div className={className}>
            <Card>
                <CardBody>
                  <CardTitle> <h2><strong>Register</strong></h2></CardTitle>
                  <CardSubtitle className="text-muted">Already have an account?
                  <Link to="/login"> Log In. </Link></CardSubtitle>
                  <br/>
                  <Form onSubmit={this.onSubmit}>
              <FormGroup className="text-center">
                <Label for='name'>Username</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your Username'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='email'>E-mail</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='you@youremail.com'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter your Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
                </CardBody>
            </Card>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.ui.button
});

export default connect(mapStateToProps, { buttonClicked })(Register);
