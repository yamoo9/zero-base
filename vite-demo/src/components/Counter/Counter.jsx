import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Counter(props) {
  let [count, setCount] = useState(0);

  return <div className="Counter"></div>;
}

Counter.Button = function CounterButton({
  type,
  children,
  onUpdate,
  ...restProps
}) {
  return (
    <button type={type} onClick={onUpdate} {...restProps}>
      {children}
    </button>
  );
};

Counter.Button.defaultProps = {
  type: 'button',
};

Counter.Button.propTypes = {
  /** 버튼 **타입** */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** 업데이트 콜백 */
  onUpdate: PropTypes.func,
  /** 버튼 콘텐츠  */
  children: PropTypes.node,
};
