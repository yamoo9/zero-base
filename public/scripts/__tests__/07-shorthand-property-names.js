// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] 일반 함수 식, 화살표 함수의 this에 대해 학습합니다.
// - [ ] 객체의 메서드에는 어떤 방법을 사용해 함수를 작성하는 것이 좋을까요?
// - [ ] 객체에서 화살표 함수는 언제 사용하는 것이 좋을까요?
// - [ ] 객체 단축 속성 이름(Shorthand property names)을 활용해 구문을 수정합니다.
// -----------------------------------------------------------------------------

// 일반 함수 식 참조
const show = function () {
  return `${this.name} 보다.`;
};

const look = function () {
  return `${this.name} 지켜보다.`;
};

// 화살표 함수 식 참조
// 화살표 함수 식 내부의 this는 일반 함수의 this와 가리키는 대상이 다릅니다.
const watch = () => {
  return `${this.name} 관찰하다.`;
};

// 아래 ES5 코드를 ES6 코드로 변경합니다. ----------------------------------------------

const euid = {
  name: '이듬',
  show,
  look,
  watch,
};

// ------------------------------------------------------------------------------
// TEST
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

const setDynamicProperty = (object, propName, value) => {
  if (typeof value === 'function') {
    value = value.bind(object);
    object[propName] = value;
    return [propName, value];
  }

  object[propName] = function () {
    return this.name + '처럼 ' + value + '하다.';
  };

  return [propName, value];
};

test('계산된 속성을 사용해 객체의 메서드 이름을 `think`로 설정할 수 있다.', () => {
  let propertyName = 'think';
  let valueKeyword = '생각';
  setDynamicProperty(euid, propertyName, valueKeyword);
  expect(euid[propertyName]()).toMatch(new RegExp(valueKeyword));
});

test('계산된 속성을 사용해 객체의 메서드 이름을 `behavior`로 변경할 수 있다.', () => {
  let methodName = 'behavior';
  let returnValue = '행동하다';

  // Arrow Function에서 arguments, super, this, new.target에 대한 참조는 렉시컬 환경의 바인딩으로 해석되어야 합니다. 일반적으로 이것은 바로 둘러싸는 함수의 함수 환경입니다.
  // 참고: https://262.ecma-international.org/6.0/#sec-arrow-function-definitions-runtime-semantics-evaluation

  // 화살표 함수는 리바인드(re-bind)하여 this 참조를 변경할 수 없습니다.
  // 화살표 함수의 this는 항상 정의된 컨텍스트를 가리킵니다.
  // this를 변경해야 할 경우, 일반 함수 식을 사용해야 합니다.
  const [, value] = setDynamicProperty(euid, methodName, function () {
    return `${this.name} ${returnValue}`;
  });

  expect(value()).toBe(euid[methodName]());
});
