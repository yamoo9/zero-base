import './ToggleButton.css';
import classNames from 'classnames';

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
