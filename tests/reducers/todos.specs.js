import todos from '../../app/reducers/todos';
import deepFreeze from 'deep-freeze';

const stateBefore = [];

const action = {
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
};

const stateAfter = [
  {
    id: 0,
    text: 'Learn Redux',
    completed: false
  }
];

deepFreeze(stateBefore);
deepFreeze(action);

describe('Add Todo reducer', () => {
  it('Should add a To Do to the state', () => {
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });
});