import React , { Component } from 'react';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import { Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {

  render () {
    return (
      <Provider store={store}>
            <Switch>
              <Route exact path ="/profile" component={Profile}/>
            </Switch>
        < HomePage/>
      </Provider>
    );
}
}

export default App;
