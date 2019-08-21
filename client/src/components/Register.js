import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
   CardTitle,
   Col,
  CardBody
} from "reactstrap";
import { connect } from "react-redux"; // API to connect component state to redux store
import PropTypes from "prop-types";
import { buttonClicked } from "../actions/uiActions";


var divStyle = {
  display: 'inline-block',

};


class Register extends Component {

    state = {
  display: false,
};

static propTypes = {
    buttonClicked: PropTypes.func.isRequired,
    button: PropTypes.bool,

  };

showForm = () => {
  this.setState({
    display:true,
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
           {this.props.button && <Button onClick={this.showForm} color="light">Register</Button>}
            {this.state.display &&
            <Card>
                <CardBody>
                  <CardTitle> <h2><strong>Register</strong></h2></CardTitle>
                  <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
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
            }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.ui.button
});

export default connect(mapStateToProps, { buttonClicked })(Register);
