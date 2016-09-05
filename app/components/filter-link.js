import React, { Component, PropTypes } from 'react';

class FilterLink extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    currentFilter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const {
      filter,
      children,
      currentFilter,
      onClick
    } = this.props;

    if (filter === currentFilter) {
      return <span>{children}</span>;
    }

    return (
      <a
        href="#{children}"
        onClick={e => {
          e.preventDefault();
          onClick(filter);
        }}
      >
        {children}
      </a>
    );
  }
}

export default FilterLink;
