import './ToggleButton.css';
import { ThemeContext } from '@/contexts/theme';
import classNames from 'classNames';
import { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

export function ToggleButton({ onText, offText, on, onToggle, activeClass }) {
  // 전역에서 제공된 ThemeContext의 상태 데이터를 수요

  return (
    <ThemeContext.Consumer>
      {/* render props pattern */}
      {(value) => {
        console.log(value);
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
      }}
    </ThemeContext.Consumer>
  );
}

ToggleButton.defaultProps = {
  activeClass: 'ToggleButton--on',
  on: false,
};

const numberOrStringType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]).isRequired;

ToggleButton.propTypes = {
  /** 활성 상태 텍스트 콘텐츠 */
  onText: numberOrStringType,
  /** 비활성 상태 텍스트 콘텐츠 */
  offText: numberOrStringType,
  /** 활성 상태 사용자 정의 클래스 이름 */
  activeClass: PropTypes.string,
  /** 토글 이벤트 핸들러 */
  onToggle: PropTypes.func,
  /** 활성 상태 */
  on: PropTypes.bool,
};
