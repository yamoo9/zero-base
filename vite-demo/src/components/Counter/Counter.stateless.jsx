import PropTypes from 'prop-types';

export const Counter = (props) => {
  return (
    <div className="Counter">
      <button type="button" disabled={props.disabledButtons}>
        -
      </button>
      <output>{props.count}</output>
      <button type="button" disabled={props.disabledButtons}>
        +
      </button>
    </div>
  );
};

Counter.defaultProps = {
  count: 0,
  disabledButtons: false,
};

Counter.propTypes = {
  /** 카운트 */
  count: PropTypes.number,
  /** 버튼 비활성 여부 */
  disabledButtons: PropTypes.bool,
};
