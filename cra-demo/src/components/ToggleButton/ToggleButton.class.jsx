import './ToggleButton.css';
import classNames from 'classnames';

import { Component } from 'react';

export class ToggleButtonClass extends Component {
  static defaultProps = {
    activeClass: 'ToggleButton--on',
  };

  render() {
    let { onText, offText, on, onToggle, activeClass } = this.props;

    return (
      <button
        type="button"
        className={classNames('ToggleButton', { [activeClass]: on })}
        onClick={onToggle}
      >
        {on ? onText : offText}
      </button>
    );
  }
}
