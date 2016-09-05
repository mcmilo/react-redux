/* eslint react/prefer-stateless-function: "off" */
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp';

const store = createStore(todoApp);

let nextTodoId = 0;

class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }
        }
        />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++
            });
            this.input.value = '';
          }}>Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const appRender = () => {
  render(<App
    todos={store.getState().todos}
  />, document.getElementById('app'));
};

store.subscribe(appRender);
appRender();
