import { PropTypes } from 'prop-types';

export function Headline({ lv, className, ...restProps }) {
  const ComponentName = `h${lv}`;
  return (
    <ComponentName className={`Headline ${className}`.trim()} {...restProps} />
  );
}

Headline.defaultProps = {
  lv: 2,
};

Headline.propTypes = {
  /** 제목 레벨 */
  lv: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** 사용자 정의 클래스 이름 */
  className: PropTypes.string,
};
