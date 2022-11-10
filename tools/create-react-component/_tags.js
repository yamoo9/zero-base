try {
  require.resolve('cli-color');
} catch (error) {
  console.log(
    'cli-color 패키지 설치가 필요합니다. 😳 자동 설치를 시작합니다...'
  );

  const { execSync } = require('node:child_process');

  execSync('npm i -D cli-color');

  console.log('cli-color 패키지가 설치되었습니다. 😃🎉');
}

const clc = require('cli-color');

exports.createTag = clc.bold.bgBlueBright;
exports.editTag = clc.bold.bgYellowBright;
exports.deleteTag = clc.bold.bgRedBright;
