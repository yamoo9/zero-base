// --------------------------------------------------------------------------
// TODO
// --------------------------------------------------------------------------
// - [x] process.argv 배열에서 사용자가 전달한 인자를 가져오기
// - [x] 인자의 구조를 분석해서 key:value 쌍 값의 데이터 구조화 구성 후, 반환
// --------------------------------------------------------------------------

const { argv } = require('node:process');
const SEPERATOR = '=';

const getArgv = () =>
  Object.fromEntries(
    argv.slice(2).map((keyValue) => {
      keyValue = keyValue.replace(/--/g, '');
      return keyValue.includes(SEPERATOR)
        ? keyValue.split(SEPERATOR)
        : [keyValue, true];
    })
  );

module.exports = getArgv;
