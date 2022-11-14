const fs = require('node:fs');
const { resolve, join } = require('node:path');
const removeCwdPath = require('./removeCwdPath');
const { createTag, editTag } = require('./cliTags');

module.exports = function createReactComponentDir({
  name,
  location,
  language, // { type, ext }
  style, // { ext, module, moduleClassName }
  test, // { type, suffix }
}) {
  // 생성할 디렉토리 구성
  let dirPath = configureComponentDir(location, name);

  // 스타일 파일 이름 구성
  let styleFileName = configureStyleFileName(name, style);

  // 엔트라 파일 구성
  configureEntryFile(dirPath, name, language);

  // React 컴포넌트 파일 구성
  configureReactComponentFile(dirPath, name, language, style, styleFileName);

  // React 컴포넌트 스타일 파일 구성
  configureReactStyleFile(dirPath, name, styleFileName, style);

  // React 컴포넌트 테스트 파일 구성
  configureReactTestFile(dirPath, name, test, language);

  // 컴포넌트 디렉토리 엔트리 파일 수정
  editComponentDirEntryFile(location, name, language);
};

/* 구성 함수 -------------------------------------------------------------------- */

function configureComponentDir(location, name) {
  let dirPath = resolve(`${location}/${name}`);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(createTag(`${removeCwdPath(dirPath)} 디렉토리 생성`));
  }

  return dirPath;
}

function configureStyleFileName(name, { module, ext }) {
  return `${name}${module ? '.module' : ''}${ext}`;
}

function configureEntryFile(dirPath, name, language) {
  const { type } = language;
  let ext = type === 'typescript' ? 'ts' : 'js';
  let entryFilePath = `${dirPath}/index.${ext}`;

  let reactEntryTemplatePath = join(
    __dirname,
    `../templates/${type}/index.${ext}`
  );
  let reactEntryFileTemplate = fs.readFileSync(reactEntryTemplatePath, {
    encoding: 'utf-8',
  });

  reactEntryFileTemplate = reactEntryFileTemplate.replaceAll('{name}', name);

  fs.writeFileSync(resolve(entryFilePath), reactEntryFileTemplate);

  console.log(createTag(`${removeCwdPath(entryFilePath)}/ 파일 생성`));
}

function configureReactComponentFile(
  dirPath,
  name,
  language,
  style,
  styleFileName
) {
  const { type, ext } = language;
  const { module, moduleClassName } = style;

  let reactFilePath = `${dirPath}/${name}${ext}`;

  let reactTemplatePath = join(__dirname, `../templates/${type}/[name]${ext}`);
  let reactFileTemplate = fs.readFileSync(reactTemplatePath, {
    encoding: 'utf-8',
  });

  reactFileTemplate = reactFileTemplate.replaceAll('{name}', name);

  if (module) {
    reactFileTemplate = reactFileTemplate.replace(
      `"${name}"`,
      `{styles.${moduleClassName}}`
    );
  }

  fs.writeFileSync(
    resolve(reactFilePath),
    `import ${
      module ? 'styles from' : ''
    } "./${styleFileName}";\n\n${reactFileTemplate}`
  );

  console.log(createTag(`${removeCwdPath(reactFilePath)}/ 파일 생성`));
}

function configureReactStyleFile(dirPath, name, styleFileName, style) {
  let reactStyleFilePath = `${dirPath}/${styleFileName}`;

  fs.writeFileSync(
    resolve(reactStyleFilePath),
    module ? `.${style.moduleClassName} {}` : `.${name} {}`
  );

  console.log(createTag(`${removeCwdPath(reactStyleFilePath)}/ 파일 생성`));
}

function configureReactTestFile(dirPath, name, test, language) {
  let { suffix } = test;
  let { type, ext } = language;
  let reactTestFilePath = `${dirPath}/${name}.${suffix}${ext}`;

  let reactTestTemplatePath = join(
    __dirname,
    `../templates/${type}/[name].${suffix}${ext}`
  );
  let reactTestFileTemplate = fs.readFileSync(reactTestTemplatePath, {
    encoding: 'utf-8',
  });

  reactTestFileTemplate = reactTestFileTemplate.replaceAll('{name}', name);

  fs.writeFileSync(resolve(reactTestFilePath), reactTestFileTemplate);

  console.log(createTag(`${removeCwdPath(reactTestFilePath)}/ 파일 생성`));
}

function editComponentDirEntryFile(location, name, language) {
  let { type } = language;
  let componentDirEntryPath = resolve(
    `${location}/index.${type === 'typescript' ? 'ts' : 'js'}`
  );

  if (!fs.existsSync(componentDirEntryPath)) {
    fs.writeFileSync(componentDirEntryPath, '');
    console.log(createTag(`${removeCwdPath(componentDirEntryPath)} 파일 생성`));
  }

  let entryContents = fs.readFileSync(componentDirEntryPath, {
    encoding: 'utf-8',
  });

  if (entryContents !== '') {
    entryContents = `${entryContents.trim()}\n`;
  }

  fs.writeFileSync(
    componentDirEntryPath,
    `${entryContents}export * from './${name}';`
  );

  console.log(editTag(`${removeCwdPath(componentDirEntryPath)}/ 파일 수정`));
}
