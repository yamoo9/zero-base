const fs = require("node:fs");
const { resolve, join } = require("node:path");
const removeCwdPath = require('./_removeCwdPath');
const { createTag, editTag } = require('./_tags');

module.exports = function scaffoldReactComponentFiles({
  location,
  name,
  module,
  ext,
  styleExt,
  testSuffix,
  styleModuleClassName,
}) {
  if (name) {

    let dirPath = resolve(`${location}/${name}`);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(createTag(`${removeCwdPath(dirPath)} 디렉토리 생성`));
    }

    let styleFileName = `${name}${module ? '.module' : ''}${styleExt}`;

    // ----------------------------------------------------------------------------------------
    // 엔트리 파일
    
    let entryFilePath = `${dirPath}/index.js`;

    let reactEntryTemplatePath = join(__dirname, '../templates/index.js');
    let reactEntryFileTemplate = fs.readFileSync(reactEntryTemplatePath, { encoding: 'utf-8' });

    reactEntryFileTemplate = reactEntryFileTemplate.replaceAll('{name}', name);
    
    fs.writeFileSync(resolve(entryFilePath), reactEntryFileTemplate);

    console.log(createTag(`${removeCwdPath(entryFilePath)}/ 파일 생성`));

    // ----------------------------------------------------------------------------------------
    // React 컴포넌트 파일

    let reactFilePath = `${dirPath}/${name}${ext}`;

    let reactTemplatePath = join(__dirname, '../templates/[name].jsx');
    let reactFileTemplate = fs.readFileSync(reactTemplatePath, { encoding: 'utf-8' });

    reactFileTemplate = reactFileTemplate.replaceAll('{name}', name);
    
    if (module) {
      reactFileTemplate = reactFileTemplate.replace(`"${name}"`, `{styles.${styleModuleClassName}}`);
    }

    fs.writeFileSync(
      resolve(reactFilePath),
      `import ${module ? 'styles from' : ''} "./${styleFileName}";\n\n${reactFileTemplate}`
    );

    console.log(createTag(`${removeCwdPath(reactFilePath)}/ 파일 생성`));

    // ----------------------------------------------------------------------------------------
    // React 컴포넌트 스타일 파일

    let reactStyleFilePath = `${dirPath}/${styleFileName}`;

    fs.writeFileSync(
      resolve(reactStyleFilePath),
      module ? `.${styleModuleClassName} {}` : `.${name} {}`
    );

    console.log(createTag(`${removeCwdPath(reactStyleFilePath)}/ 파일 생성`));
    
    // ----------------------------------------------------------------------------------------
    // React 컴포넌트 테스트 파일

    let reactTestFilePath = `${dirPath}/${name}.${testSuffix}${ext}`;

    let reactTestTemplatePath = join(__dirname, '../templates/[name].test.jsx');
    let reactTestFileTemplate = fs.readFileSync(reactTestTemplatePath, { encoding: 'utf-8' });

    reactTestFileTemplate = reactTestFileTemplate.replaceAll('{name}', name);

    fs.writeFileSync(
      resolve(reactTestFilePath),
      reactTestFileTemplate
    );

    console.log(createTag(`${removeCwdPath(reactTestFilePath)}/ 파일 생성`));

    // ----------------------------------------------------------------------------------------
    // 컴포넌트 디렉토리 엔트리 파일 수정

    let componentDirEntryPath = resolve(`${location}/index.js`);

    if (!fs.existsSync(componentDirEntryPath)) {
      fs.writeFileSync(componentDirEntryPath, '');
      console.log(createTag(`${removeCwdPath(componentDirEntryPath)} 파일 생성`));
    }

    let entryContents = fs.readFileSync(componentDirEntryPath, { encoding: 'utf-8' });

    if(entryContents !== '') {
      entryContents = `${entryContents.trim()}\n`;
    }

    fs.writeFileSync(componentDirEntryPath, `${entryContents}export * from './${name}';`);

    console.log(editTag(`${removeCwdPath(componentDirEntryPath)}/ 파일 수정`));

  } else {
    console.error('[🚨 오류] --name=컴포넌트_이름 옵션 설정이 필요합니다.');
    process.exit();
  }
}