import React, { Component, PropTypes } from 'react';
import { Link } from '../components/components';

class FilterLink extends Component {

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const store = this.context.store;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter ===
          state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }>
        {props.children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object
};

export default FilterLink;
