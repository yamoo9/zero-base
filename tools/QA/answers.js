const defaultParams = require('../create-react-component/defaultParams');

function createReactComponentDirectory({
  ComponentName,
  componentDirectory,
  usingTypeScript,
  usingSass,
  usingModule,
  usingTest,
  testType,
}) {
  const createReactComponent = require('../create-react-component/createReactComponentDir');

  const usingStorybook = /storybook/i.test(testType);
  const userParams = {
    name: ComponentName,
    location: componentDirectory,
    language: {
      type: usingTypeScript ? 'typescript' : 'javascript',
      ext: usingTypeScript ? '.tsx' : '.jsx',
    },
    style: {
      ...defaultParams.style,
      ext: usingSass ? '.scss' : '.css',
      module: usingModule,
    },
    test: {
      type: usingStorybook ? 'storybook' : 'testing library',
      suffix: usingStorybook ? 'stories' : 'test',
      using: usingTest,
    },
  };

  const config = {
    ...defaultParams,
    ...userParams,
  };

  createReactComponent(config);
}

function deleteReactComponentDirectory(answers) {
  const { ComponentName, componentDirectory, usingTypeScript } = answers;
  const deleteReactComponent = require('../create-react-component/deleteReactComponentDir');

  const userParams = {
    name: ComponentName,
    location: componentDirectory,
    language: {
      type: usingTypeScript ? 'typescript' : 'javascript',
    },
  };

  const config = {
    ...defaultParams,
    ...userParams,
  };

  deleteReactComponent(config);
}

module.exports = {
  createReactComponentDirectory,
  deleteReactComponentDirectory,
};
