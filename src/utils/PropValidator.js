export const PropValidator = {
  string(props, propName, componentName) {
    let value = props[propName];
    let valueType = typeof value;
    if (valueType !== 'string') {
      throw new TypeError(
        `${componentName} 컴포넌트에 전달된 "${propName}" prop의 기대 데이터 타입은 string 이나, 실제 데이터 타입은 "${valueType}"입니다.`
      );
    }
  },
  boolean(props, propName, componentName) {
    let value = props[propName];
    let valueType = typeof value;
    if (valueType !== 'boolean') {
      throw new TypeError(
        `${componentName} 컴포넌트에 전달된 "${propName}" prop의 기대 데이터 타입은 boolean 이나, 실제 데이터 타입은 "${valueType}"입니다.`
      );
    }
  },
};
