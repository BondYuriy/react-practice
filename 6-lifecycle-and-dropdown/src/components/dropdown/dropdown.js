import React, { Component, createRef } from 'react';
import DropdownContent from './dropdownContent';
import s from './dropdown.module.css';

export default class Dropdown extends Component {
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;

    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    const { isDropdownOpen } = this.state;

    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({
      isDropdownOpen: true,
    });
  };

  closeDropdown = () => {
    this.setState({
      isDropdownOpen: false,
    });
  };

  render() {
    const { isDropdownOpen } = this.state;

    return (
      <div
        className={s.Dropdown}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        Dropdown
        {isDropdownOpen && <DropdownContent />}
      </div>
    );
  }
}
