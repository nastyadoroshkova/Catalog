import React, { Component } from 'react';
import Menu from './components/static/Menu.react';
import './App.css';
import createAppStore from './store';
import { Provider } from 'react-redux'

const store = createAppStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Menu/>
      </Provider>
    );
  }
}

export default App;
