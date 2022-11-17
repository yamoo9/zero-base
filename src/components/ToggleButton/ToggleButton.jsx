import './ToggleButton.css';
import classNames from 'classnames';
import { bool, number, string, func, oneOfType } from 'prop-types';

export function ToggleButton({ onText, offText, on, onToggle, activeClass }) {
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

ToggleButton.defaultProps = {
  activeClass: 'ToggleButton--on',
  on: false,
};

ToggleButton.propTypes = {
  on: bool,
  onToggle: func,
  activeClass: string,
  onText: oneOfType([number, string]).isRequired,
  offText: oneOfType([number, string]).isRequired,
};
