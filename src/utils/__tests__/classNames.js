import { classNames } from 'utils/classNames';

describe('classNames 유틸리티', () => {
  test(`classNames('a', 'b', 'c')  →  'a b c' 입니다.`, () => {
    let classes = classNames('a', 'b', 'c');
    let expected = 'a b c';
    expect(classes).toBe(expected);
  });

  test(`classNames({ a: false })  →  '' 입니다.`, () => {
    let classes = classNames({ a: false });
    let expected = '';
    expect(classes).toBe(expected);
  });

  test(`classNames({ a: true, b: false, c: true })  →  'a c' 입니다.`, () => {
    let classes = classNames({ a: true, b: false, c: true });
    let expected = 'a c';
    expect(classes).toBe(expected);
  });

  test(`classNames('a', { 'b': true, 'c': false }, 'd')  →  'a b d' 입니다.`, () => {
    let classes = classNames('a', { b: true, c: false }, 'd');
    let expected = 'a b d';
    expect(classes).toBe(expected);
  });

  test(`classNames({ a: true, b: false }, { c: true })  →  'a c' 입니다.`, () => {
    let classes = classNames({ a: true, b: false }, { c: true });
    let expected = 'a c';
    expect(classes).toBe(expected);
  });

  test(`classNames(null, false, 'a', undefined, 0, 1, { b: null }, '')  →  'a 1' 입니다.`, () => {
    let classes = classNames(
      null,
      false,
      'a',
      undefined,
      0,
      1,
      { b: null },
      ''
    );
    let expected = 'a 1';
    expect(classes).toBe(expected);
  });

  test(`classNames('a', ['b', { c: true, d: false }])  →  'a b c' 입니다.`, () => {
    let classes = classNames('a', ['b', { c: true, d: false }]);
    let expected = 'a b c';
    expect(classes).toBe(expected);
  });
});
