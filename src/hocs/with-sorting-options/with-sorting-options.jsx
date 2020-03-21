import React, {PureComponent} from 'react';

const withSortingOptions = (Component) => {
  class WithSortingOptions extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this._handleToggleClick = this._handleToggleClick.bind(this);
      this._handleOutsideClick = this._handleOutsideClick.bind(this);
    }

    render() {
      return (
        <Component {...this.props} onToggleClick={this._handleToggleClick} isOpen={this.state.isOpen}/>
      );
    }

    _handleOpenDropDown() {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen
      }));
    }

    _handleCloseDropDown() {
      this.setState({
        isOpen: false
      });
    }

    _handleToggleClick() {
      this._handleOpenDropDown();

      document.addEventListener(`click`, this._handleOutsideClick);
    }

    _handleOutsideClick() {
      this._handleCloseDropDown();
      document.removeEventListener(`click`, this._handleOutsideClick);
    }
  }

  return WithSortingOptions;
};

export default withSortingOptions;
