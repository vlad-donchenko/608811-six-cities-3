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
      this._handleToggleKeyPress = this._handleToggleKeyPress.bind(this);
    }

    render() {
      return (
        <Component {...this.props} onToggleClick={this._handleToggleClick} onToggleKeyPress={this._handleToggleKeyPress} isOpen={this.state.isOpen}/>
      );
    }

    _openDropDown() {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen
      }));
    }

    _closeDropDown() {
      this.setState({
        isOpen: false
      });
    }

    _handleToggleClick() {
      this._openDropDown();

      document.addEventListener(`click`, this._handleOutsideClick);
    }

    _handleOutsideClick() {
      this._closeDropDown();
      document.removeEventListener(`click`, this._handleOutsideClick);
    }

    _handleToggleKeyPress(evt) {
      const isEnter = evt.key === `Enter`;

      if (isEnter) {
        this._openDropDown();
      }
    }
  }

  return WithSortingOptions;
};

export default withSortingOptions;
