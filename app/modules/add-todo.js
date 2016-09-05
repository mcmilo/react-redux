import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionsCreators';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
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
