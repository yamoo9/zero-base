import './ToggleButton.css';
import classNames from 'classNames';
import { css } from 'styled-components/macro';

export function ToggleButton({ onText, offText, on, onToggle, activeClass }) {
  return (
    <button
      type="button"
      className={classNames('ToggleButton', { [activeClass]: on })}
      onClick={onToggle}
      css={css`
        color: ${on ? '#bbd5d5' : '#292f2f'};
      `}
    >
      {on ? onText : offText}
    </button>
  );
}

ToggleButton.defaultProps = {
  activeClass: 'ToggleButton--on',
};
