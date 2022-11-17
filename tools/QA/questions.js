const inquirer = require('inquirer');

const createQuestions = () =>
  inquirer.prompt([
    {
      name: 'ComponentName',
      message: '컴포넌트 이름을 입력하세요.',
      validate: (input) => {
        if (!input.trim()) {
          throw Error('생성할 컴포넌트 이름을 입력하세요.');
        }
        return true;
      },
    },
    {
      name: 'componentDirectory',
      message: '어느 위치에 생성할까요?',
      default: 'src/components',
    },
    {
      type: 'confirm',
      name: 'usingTypeScript',
      message: 'TypeScript를 사용할까요?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'usingSass',
      message: 'Sass를 사용할까요?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'usingModule',
      message: '모듈 방식을 사용할까요?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'usingTest',
      message: '테스트 파일을 생성할까요?',
      default: false,
    },
    {
      type: 'list',
      name: 'testType',
      message: '테스트 타입을 선택하세요.',
      choices: ['Storybook', 'React Testing Library'],
      when: (answers) => answers.usingTest,
    },
  ]);

const deleteQuestions = () =>
  inquirer.prompt([
    {
      name: 'componentDirectory',
      message: '삭제할 컴포넌트 디렉토리가 포함된 위치를 확인합니다.',
      default: 'src/components',
    },
    {
      name: 'ComponentName',
      message: '삭제할 컴포넌트 디렉토리 이름을 입력하세요.',
    },
    {
      type: 'confirm',
      name: 'usingTypeScript',
      message: '삭제할 컴포넌트 디렉토리는 TypeScript로 구성되었나요?',
      default: false,
    },
  ]);

module.exports = {
  createQuestions,
  deleteQuestions,
};
