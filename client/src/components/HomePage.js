import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import { connect } from "react-redux";
import { Route, Switch, Link } from 'react-router-dom'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
   CardTitle,
   CardSubtitle,
  CardBody
} from "reactstrap";
import PropTypes from "prop-types";
import { buttonClicked } from "../actions/uiActions";
import './style.css';


var divStyle = {
color:'white'
};

export class HomePage extends Component {

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

  render() {
    return (
       <div className="container">
        <div className="main">
          <p>
          <h1 style={divStyle}> <strong>MERN</strong> Sessions Auth App </h1>
          <br/>
            <h5 style={divStyle}>Minimalistic Sessions based Authentication app <span role="img" aria-label="lock">🔒 </span><br></br>Built with React + Redux, NodeJS, Express, MongoDB and Bootstrap</h5>
            <h5 style={divStyle}>Uses Cookies <span role="img" aria-label="lock">🍪 </span></h5>
          <br/>
          </p>
          <div>

            <Switch>
              <Route exact path ="/login" component={Login}/>
              <Route exact path ="/register" component={Register}/>
            </Switch>

             { this.props.button && <Link className='divStyle' to="/login">
               <Button size="lg"  color="light">Sign In</Button>
               </Link>}

             {this.props.button && <Link className='divStyle' to="/register">
               <Button  size="lg"  color="light">Register</Button>
             </Link>}

          </div>
        </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.ui.button
});

export default connect(mapStateToProps, {buttonClicked})(HomePage);
