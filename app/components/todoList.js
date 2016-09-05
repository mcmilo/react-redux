import React, { Component, PropTypes } from 'react';
import { Todo } from './components';

// TODO: Why component as pure function ask for propTypes validation?
/*
const TodoList = ({ todos, onTodoClick }) =>
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>;
*/

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired
  };

  render() {
    const {
      todos,
      onTodoClick
    } = this.props;

    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }
}

export default TodoList;
