import { connect } from 'react-redux';
import { TodoList } from '../components/components';
import { toggleTodo } from '../actions/actionsCreators';

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

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
