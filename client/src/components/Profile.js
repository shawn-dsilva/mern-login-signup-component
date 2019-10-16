import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Button,
  Card,
 CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";
import PropTypes from "prop-types";
import './style.css';
import { Redirect } from 'react-router-dom'
import { logout } from '../actions/authActions';
import { buttonReset} from '../actions/uiActions';

export class Profile extends Component {

  static propTypes = {
    button: PropTypes.bool,
    authState: PropTypes.object.isRequired,
    buttonReset: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };


  onLogout = (e) => {
    e.preventDefault();
    this.props.buttonReset();
    this.props.logout();
  };

  render() {

    if(!this.props.authState.isAuthenticated) {
      return <Redirect to="/" />
    }

    const {user} = this.props.authState;

    return (
       <div className="container">
        <div className="main">
          <Card>
            <CardBody>
          <CardTitle><h1>{ user ? `Welcome, ${user.name}`: ''} <span role="img" aria-label="party-popper">🎉 </span> </h1></CardTitle>
          <br/>
           <CardSubtitle><h5> You are now Logged In <span role="img" aria-label="clap">👏 </span></h5></CardSubtitle>
          <br/>
        <Button size="lg" onClick={this.onLogout} color="primary">Logout</Button>
            </CardBody>
          </Card>
        </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.ui.button,
  authState: state.auth
});

export default connect(mapStateToProps, { logout, buttonReset })(Profile);
