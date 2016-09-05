import React, { Component, PropTypes } from 'react';

// TODO: Why component as pure function ask for propTypes validation?
/*
const Todo = ({ onClick, completed, text }) =>
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
  >
    {text}
  </li>;
*/

class Todo extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const {
      onClick,
      completed,
      text
    } = this.props;
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration:
            completed ?
              'line-through' :
              'none'
        }}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
