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

const stateBefore2 = [
  {
    id: 0,
    text: 'Learn Redux',
    completed: false
  },
  {
    id: 1,
    text: 'Go shopping',
    completed: false
  }
];

const action2 = {
  type: 'TOGGLE_TODO',
  id: 1
};

const stateAfter2 = [
  {
    id: 0,
    text: 'Learn Redux',
    completed: false
  },
  {
    id: 1,
    text: 'Go shopping',
    completed: true
  }
];

describe('Toggle To Do reducer', () => {
  it('Should toggle value of completed property of the given To Do', () => {
    expect(
      todos(stateBefore2, action2)
    ).toEqual(stateAfter2);
  })
});
