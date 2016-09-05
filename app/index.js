/* eslint react/prefer-stateless-function: "off" */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
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

render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>,
  document.getElementById('app'));
