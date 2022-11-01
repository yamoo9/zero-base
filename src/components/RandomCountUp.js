export function RandomCountUp(props) {
  // 방법 1. className 프로퍼티 활용
  // let classNames = props.isComplete ? 'stop-animate' : '';

  // 방법 2. style 프로퍼티 활용
  const styles = {
    animationName: 'none',
    // 'animation-name': 'none',
  };

  return <output style={styles}>{props.count}</output>;
}
