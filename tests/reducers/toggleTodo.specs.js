import toggleTodo from '../../app/reducers/toggleTodo';

const beforeState = {
  id: 0,
  text: 'Learn Redux',
  completed: false
};

const afterState = {
  id: 0,
  text: 'Learn Redux',
  completed: true
};

describe('toggle To Do Reducer', () => {
  it('should change the completed value of the To Do', () => {
    expect(
      toggleTodo(beforeState)
    ).toEqual(afterState);
  });
});