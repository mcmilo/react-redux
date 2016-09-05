/* eslint react/prefer-stateless-function: "off" */
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp';
import {
  TodoList,
  AddTodo,
  Footer
} from './components/components';

const store = createStore(todoApp);

let nextTodoId = 0;

const getVisibleTodos = (
  todos,
  filter
) => {
  let filteredTodos;

  switch (filter) {
    case 'SHOW_ALL':
      filteredTodos = todos;
      break;
    case 'SHOW_COMPLETED':
      filteredTodos = todos.filter(
        t => t.completed
      );
      break;
    case 'SHOW_ACTIVE':
      filteredTodos = todos.filter(
        t => !t.completed
      );
      break;
    default:
      filteredTodos = todos;
  }

  return filteredTodos;
};

class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string.isRequired
  };

  render() {
    const {
      todos,
      visibilityFilter
    } = this.props;
    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );

    return (
      <div>
        <AddTodo
          onAddClick={text =>
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text
            })
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          }
        />
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={filter =>
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            })
          }
        />
      </div>
    );
  }
}

const appRender = () => {
  render(<App
    {...store.getState()}
  />, document.getElementById('app'));
};

store.subscribe(appRender);
appRender();
