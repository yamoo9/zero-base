import './ToggleButton.css';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import { css } from 'styled-components/macro';

const ToggleButtonContentType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]).isRequired;

const changeTextColor = (on) => css`
  color: ${on ? '#bbd5d5' : '#292f2f'};
`;

export function ToggleButton({ onText, offText, on, onToggle, activeClass }) {
  return (
    <button
      type="button"
      className={classNames('ToggleButton', { [activeClass]: on })}
      css={changeTextColor(on)}
      onClick={onToggle}
    >
      {on ? onText : offText}
    </button>
  );
}

ToggleButton.defaultProps = {
  on: false,
  activeClass: 'ToggleButton--on',
};

ToggleButton.propTypes = {
  /** 활성 콘텐츠 */
  onText: ToggleButtonContentType,
  /** 비활성 콘텐츠 */
  offText: ToggleButtonContentType,
  /** 활성 여부 */
  on: PropTypes.bool,
  /** 활성/비활성 토글 */
  onToggle: PropTypes.func,
  /** 활성 클래스 이름 */
  activeClass: PropTypes.string,
};
