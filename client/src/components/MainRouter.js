import React, { Component } from 'react'
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import { Route, Redirect, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { isAuth } from './actions/authActions'
import store from './store';

export class MainRouter extends Component {

  componentDidMount() {
    store.dispatch(isAuth());
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };


  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to="/profile" />
    }
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //Maps state to redux store as props
  isAuthenticated: state.auth.isAuthenticated
});


export default MainRouter
