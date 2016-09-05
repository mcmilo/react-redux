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
  static propTypes = {
    store: PropTypes.object
  };

  render() {
    const {
      store
    } = this.props;

    return (
      <div>
        <AddTodo store={store} />
        <VisibleTodoList store={store} />
        <Footer store={store} />
      </div>
    );
  }
}

render(<App store={createStore(todoApp)} />,
  document.getElementById('app'));
