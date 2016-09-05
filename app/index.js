/* eslint react/prefer-stateless-function: "off" */
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp';
import {
  Footer
} from './components/components';
import {
  AddTodo,
  VisibleTodoList
} from './modules/modules';

class App extends Component {

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}
// Necessary to the context to be turn on
Provider.childContextTypes = {
  store: PropTypes.object
};

render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>,
  document.getElementById('app'));
