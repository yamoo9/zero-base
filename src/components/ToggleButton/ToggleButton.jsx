import PropTypes from 'prop-types';
import classNames from 'classNames';
import styled, { css } from 'styled-components/macro';

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const ToggleButtonContentType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]).isRequired;

export function ToggleButton({ onText, offText, on, onToggle, activeClass }) {
  return (
    <Button
      type="button"
      className={classNames('ToggleButton', { [activeClass]: on })}
      activeClass={activeClass}
      onClick={onToggle}
    >
      {on ? onText : offText}
    </Button>
  );
}

ToggleButton.defaultProps = {
  on: false,
  activeClass: 'on',
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

/* -------------------------------------------------------------------------- */
/* Styled Components                                                          */
/* -------------------------------------------------------------------------- */

const Button = styled.button(({ theme, activeClass }) => {
  let bg = theme.color.primary[50];
  let fg = theme.color.primary[500];
  let weight = theme.typography.fontWeight.medium;
  let radius = theme.borderRadius.xs;
  return css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    height: 32px;
    background: transparent;
    color: ${fg};
    border: 2px solid ${fg};
    border-radius: ${radius};
    margin: 1px;
    padding: 0 0.4em;
    font-weight: ${weight};
    font-size: 1rem;

    &.${activeClass} {
      background: ${fg};
      color: ${bg};
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${fg};
    }
  `;
});
