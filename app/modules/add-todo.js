import React from 'react';
import { connect } from 'react-redux';

const AddTodo = ({ dispatch }) => {
  let input;
  let nextTodoId = 0;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
          });
          input.value = '';
        }}>
        Add Todo
      </button>
    </div>
  );
};

// connect without params will not subscribe to store
// but will pass dispatch to component
export default connect()(AddTodo);
