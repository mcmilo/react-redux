import React from 'react';

const AddTodo = ({ store }) => {
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
          store.dispatch({
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

export default AddTodo;
