/* 종속성 모듈 설치 여부 확인 ---------------------------------------------------------- */

try {
  require.resolve('inquirer');
} catch (error) {
  console.log(
    '처음 create-react-component를 사용할 경우 종속성 패키지 설치가 필요합니다. 😳 자동 설치를 시작합니다...'
  );

  const { execSync } = require('node:child_process');

  execSync('npm i -D inquirer@8');
  execSync('npm i -D cli-color');

  console.log('inquirer, cli-color 패키지가 설치되었습니다. 😃🎉');
  process.exit();
}

/* 명령 매개변수 확인 --------------------------------------------------------------- */

const getUserParams = require('./create-react-component/getUserParams');
const params = getUserParams();

if (params.create) {
  const { createQuestions } = require('./QA/questions');
  const { createReactComponentDirectory } = require('./QA/answers');
  createQuestions().then(createReactComponentDirectory);
} else if (params.delete) {
  const { deleteQuestions } = require('./QA/questions');
  const { deleteReactComponentDirectory } = require('./QA/answers');
  deleteQuestions().then(deleteReactComponentDirectory);
} else {
  const clc = require('cli-color');
  console.error(
    clc.bold.bgRedBright(
      '`create` 또는 `delete` 명령 매개변수 설정이 필요합니다.'
    )
  );
}
