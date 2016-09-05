import React, { Component, PropTypes } from 'react';
import { TodoList } from '../components/components';

class VisibleTodoList extends Component {

  static propTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getVisibleTodos = (
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

  render() {
    const props = this.props;
    const store = props.store;
    const state = store.getState();

    return (
      <TodoList
        todos={
          this.getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}

export default VisibleTodoList;
