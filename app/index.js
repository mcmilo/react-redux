/* eslint react/prefer-stateless-function: "off" */
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp';
import { TodoList } from './components/components';

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

class FilterLink extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    currentFilter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  };

  render() {
    const filter = this.props.filter;
    const children = this.props.children;
    const currentFilter = this.props.currentFilter;

    if (filter === currentFilter) {
      return <span>{children}</span>;
    }

    return (
      <a
        href="#{children}"
        onClick={e => {
          e.preventDefault();
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          });
        }}
      >
        {children}
      </a>
    );
  }
}

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
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          }
        />
        <p>
          Show:
          {' '}
          <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          {' '}
          <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>
          {' '}
          <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
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
