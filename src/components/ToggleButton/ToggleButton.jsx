import './ToggleButton.css';
import classNames from 'classNames';
import { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

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
  on: false,
};

ToggleButton.propTypes = {
  /** 활성 상태 텍스트 콘텐츠 */
  onText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** 비활성 상태 텍스트 콘텐츠 */
  offText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** 활성 상태 사용자 정의 클래스 이름 */
  activeClass: PropTypes.string,
  /** 토글 이벤트 핸들러 */
  onToggle: PropTypes.func,
  /** 활성 상태 */
  on: PropTypes.bool,
};
