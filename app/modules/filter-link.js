import { connect } from 'react-redux';
import { Link } from '../components/components';
import { setVisibilityFilter } from '../actions/actionsCreators';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    active:
    ownProps.filter ===
    state.visibilityFilter
  };
};

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
