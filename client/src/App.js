import React , { Component } from 'react';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        < HomePage/>
      </Provider>
    );
}
}

export default App;
